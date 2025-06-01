<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use App\Models\ActivityLog;
use Illuminate\Support\Str;
use Illuminate\Routing\Route;

class LogActivity
{
    protected $operationMap = [
        'store' => 'created',
        'update' => 'updated',
        'destroy' => 'deleted',
        'restore' => 'restored',
        // Add more if needed
    ];

    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // Get route action info
        /** @var Route $route */
        $route = $request->route();
        $controllerAction = $route ? $route->getActionName() : null;

        if (!$controllerAction) {
            return $response;
        }

        // Extract controller and method
        if (!str_contains($controllerAction, '@')) {
            return $response;
        }
        [$controllerClass, $method] = explode('@', $controllerAction);

        $activity = $this->operationMap[$method] ?? null;
        if (!$activity) {
            // Only log defined activities
            return $response;
        }

        // Get the model instance from route parameters if available
        $parameters = $route->parameters();

        // Find first Eloquent model instance in parameters (e.g. Role $role)
        $subject = null;
        foreach ($parameters as $param) {
            if (is_object($param) && method_exists($param, 'getKey')) {
                $subject = $param;
                break;
            }
        }

        // If no model instance, maybe this is a create/store action, so no existing subject
        $subjectId = $subject ? $subject->getKey() : null;
        $subjectType = $subject ? class_basename($subject) : Str::singular(str_replace('Controller', '', class_basename($controllerClass)));

        $actor = Auth::user();

        // Compose message
        $actorName = $actor ? ($actor->name ?? $actor->email ?? 'User') : 'Guest';
        $title = $subject ? ($subject->name ?? $subject->title ?? 'ID '.$subjectId) : null;

        $message = $title
            ? "{$actorName} {$activity} {$subjectType} \"{$title}\""
            : "{$actorName} {$activity} {$subjectType}";

        // Create log entry
        ActivityLog::create([
            'actor_id' => $actor ? $actor->getKey() : null,
            'actor_type' => $actor ? get_class($actor) : null,
            'subject_id' => $subjectId,
            'subject_type' => $subjectType,
            'activity' => $activity,
            'message' => $message,
        ]);

        return $response;
    }
}
