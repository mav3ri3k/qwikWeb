import {component$} from "@builder.io/qwik";
import styles from './joke.module.css';

export default component$(() => {
  return (
    <div>
      <h1>Joke</h1>
      <div class={styles.container}>Hello World</div>
      <button class="btn btn-primary">Primary</button>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
        </div>
      </div>
      <button
        class="hover:bg-sky-500 inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
        Button
      </button>
      <button class="btn btn-primary hover:bg-sky-500">Button</button>
    </div>
  )
})
