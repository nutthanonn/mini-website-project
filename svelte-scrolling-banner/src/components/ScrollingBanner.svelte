<div class="w-[100vw] h-[10vh] bg-yellow-200 flex items-center overflow-hidden">
  {#each [...Array(2)] as _}
    <div class="animate-slide w-[100vw] flex-shrink-0 flex">
      {#each [...Array(8)] as _}
        <div class="flex m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
          </svg>
          <p>Nutthanon</p>
        </div>
      {/each}
    </div>
  {/each}
</div>
