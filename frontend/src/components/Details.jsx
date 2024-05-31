import React from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Details = ({ open, setOpen, movieData }) => {
  return (
    <Transition show={open}>
      <Dialog className="relative z-10" onClose={() => setOpen(false)}>
        <TransitionChild
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto relative w-screen max-w-md">
                  <TransitionChild
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="relative flex-1 px-4 sm:px-6">
                      {/* <p>{movieData?.Title}</p>
                      <p>{movieData?.Plot}</p> */}
                      <div className="flex justify-between border-2 rounded-md">
                        <img
                          src={movieData?.Poster}
                          alt="Poster"
                          className="w-50 h-60 object-cover rounded-md"
                        />
                        <div className="block">
                          <p className="text-2xl px-4 font-bold">
                            {movieData?.Title}
                          </p>
                          <p className="px-4 text-cyan-800">
                            {movieData?.Genre}
                          </p>
                          <p className="pt-8 px-4 text-slate-800">
                            <strong className="text-cyan-800">Released</strong>{" "}
                            - {movieData?.Released}
                          </p>
                          <p className="px-4 text-slate-800">
                            <strong className="text-cyan-800">Actors</strong> -{" "}
                            {movieData?.Actors}
                          </p>
                          <p className="px-4 text-slate-800">
                            <strong className="text-cyan-800">Director</strong>{" "}
                            - {movieData?.Director}
                          </p>
                          <p className="px-4 text-slate-800">
                            <strong className="text-cyan-800">
                              IMDB Rating
                            </strong>{" "}
                            - {movieData?.imdbRating}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="p-2 mt-10">{movieData?.Plot}</p>
                      </div>

                      <div className="flex justify-center mt-20">
                        <button className="border-solid border-2 border-sky-500 p-4 px-16 rounded-full hover:bg-sky-500 hover:text-white">
                          Add to Playlist
                        </button>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Details;
