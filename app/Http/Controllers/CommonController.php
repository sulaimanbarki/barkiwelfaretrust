<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommonController extends Controller
{
    public function cities(Request $request, $country)
    {
        $cities = City::where('country_id', $country)->get(['id', 'name']);
        return response()->json($cities);
    }

    public function backup()
    {
        try {
            $tables = DB::select('SHOW TABLES');

            $output = '';
            foreach ($tables as $table) {
                $table = get_object_vars($table);
                $tableName = current($table);

                // Get the CREATE TABLE statement
                $showTableQuery = "SHOW CREATE TABLE $tableName";
                $createTable = DB::select($showTableQuery)[0]->{'Create Table'};
                $output .= "\n\n" . $createTable . ";\n\n";

                // Get all rows from the table
                $selectRowsQuery = "SELECT * FROM $tableName";
                $rows = DB::select($selectRowsQuery);

                foreach ($rows as $row) {
                    $row = (array)$row;

                    // Handle NULLs and escape strings
                    $escapedValues = array_map(function ($value) {
                        if (is_null($value)) {
                            return 'NULL';
                        }
                        return "'" . addslashes($value) . "'";
                    }, $row);

                    $values = implode(', ', $escapedValues);
                    $output .= "INSERT INTO $tableName VALUES ($values);\n";
                }
            }

            // Set file name and path
            $fileName = 'database_backup_' . date('Y-m-d_H-i-s') . '.sql';
            $filePath = storage_path('app/' . $fileName);

            // Write output to the backup file
            file_put_contents($filePath, $output);

            // Set headers for file download
            header('Content-Description: File Transfer');
            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename="' . $fileName . '"');
            header('Content-Length: ' . filesize($filePath));
            header('Pragma: no-cache');
            header('Cache-Control: must-revalidate');
            header('Expires: 0');
            readfile($filePath);

            // Delete the backup file after download
            unlink($filePath);

            exit;
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
