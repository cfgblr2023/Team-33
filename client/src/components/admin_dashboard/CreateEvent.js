import React from 'react'
import Layout from './Layout.js';
import {useState} from 'react';

function CreateEvent() {
    const [title,setTitle]=useState("");
    const [mode, setMode]=useState("");
    return (
        <>
        <Layout/>
      <div className="App">
        <div class="min-h-screen p-6 bg-white">
          <div class="container max-w-screen-lg mx-auto">
            <div>
              <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1">
                  <div class="lg:col-span-2">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 text-left">
                      <div class="md:col-span-5">
                        <label for="full_name">Event title</label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={title}
                          onChange={(e)=>{setTitle(e.target.value)}}
                        />
                      </div>
                    
                    <div>
                      <label for="event_mode">Mode</label>
                      <ul class="w-30 items-text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                <label for="list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Online</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                <label for="list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Offline</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="list-radio-millitary" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                <label for="list-radio-millitary" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hybrid</label>
                            </div>
                        </li>
                        </ul>
                        </div>
                            <br/>

                           <div>
                            <label for="event_mode">Date</label>
                            <div class="relative max-w-sm ">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"></div> 
                                <input datepicker type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> 
                            </div>
                            </div>
            
            <br/>
            

            <div>
            <label for="link">Location</label>
            <input type="text" name="link" id="link" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value=""/>
            </div>
                      <div class="md:col-span-2">
                        <label for="state">State / province</label>
                        <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            name="state"
                            id="state"
                            placeholder="State"
                            class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value=""
                          />
                          <button
                            tabindex="-1"
                            class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                          >
                            <svg
                              class="w-4 h-4 mx-2 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                          <button
                            tabindex="-1"
                            for="show_more"
                            class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                          >
                            <svg
                              class="w-4 h-4 mx-2 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      <div>
            <label class="md:col-span-2" for="link">Link</label>
            <input type="text" name="link" id="link" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value=""/>
            </div>

                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default CreateEvent;
  