<template>
  <svg v-if="name === 'cheveron-down'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
  <svg v-else-if="name === 'cheveron-right'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707" /></svg>
  <svg v-else-if="name === 'dashboard'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z" /></svg>
  <svg v-else-if="name === 'office'" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path fill-rule="evenodd" d="M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z" /></svg>
  <svg v-else-if="name === 'printer'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z" /></svg>
  <svg v-else-if="name === 'trash'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" /></svg>
  <svg v-else-if="name === 'users'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" /></svg>
  <svg v-else-if="name === 'heart'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 18s-8-4.5-8-10a4 4 0 0 1 8-2.5A4 4 0 0 1 18 8c0 5.5-8 10-8 10z" /></svg>
  <svg v-else-if="name === 'shield'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0l6 4v6c0 5.25-4.5 10-6 10S4 11.25 4 6V4l6-4zm0 2.5L5.5 5v1.5c0 3.25 2.75 7.25 4.5 7.25s4.5-4 4.5-7.25V5L10 2.5z" /></svg>
  <svg v-else-if="name === 'flag'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 2h2v16H2V2zm4 0h12v2H6V2zm0 4h12v2H6V6zm0 4h12v2H6v-2zm0 4h12v2H6v-2z" /></svg>
  <svg v-else-if="name === 'money'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0a10 10 0 1 1 0 20A10 10 0 0 1 10 0zm-2.5 7.5h5v5h-5v-5zm2.5-2.5a2.5 2.5 0 1 1-.001-4.999A2.5 2.5 0 0 1 10 5zM7.5 12h5v2.5h-5V12z" /></svg>
  <svg v-else-if="name === 'clipboard-list'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 0h12v2H4V0zm0 4h12v2H4V4zm0 4h12v2H4V8zm0 4h12v2H4v-2zm0 4h12v2H4v-2zM2 2h1.5v16H2V2zm3.5 0H7v16H5.5V2z" /></svg>
  <svg v-else-if="name === 'credit-card'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 4h16v12H2V4zm0-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm3.5 6h9v1.5h-9V8zm0-3h9v1.5h-9V5z" /></svg>
  <svg v-else-if="name === 'database'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0a10 10 0 1 1 0 20A10 10 0 0 1 10 0zm-5.5 5.5h11v2H4.5v-2zm0 4h11v2H4.5v-2zm0 4h11v2H4.5v-2z" /></svg>
</template>

<script>
export default {
  props: {
    name: String,
  },
}
</script>
