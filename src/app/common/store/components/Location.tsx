import { HeadTitle } from "@/components/HeadTitle";
import { MapComponent } from "@/components/MapComponent";
import { MapPin } from "lucide-react";
import React from "react";

export default function Location() {
  return (
    <>
      <section className="container mx-auto">
        <div className="flex xs:flex-col lg:flex-row justify-between items-center">
          <div>
            <div className="lg:w-8/12 xs:w-full">
              <div className="text-center lg:text-start">
                <HeadTitle>
                  Store <br className="hidden lg:inline" /> Location
                </HeadTitle>
              </div>
              <div>
                <div className="flex gap-2 pt-8">
                  <MapPin className="text-primary" size={30} />
                  <h1 className="text-4xl font-bold">SKOR CAMBODIA</h1>
                </div>
                <p className="text-xl font-normal w-10/12">
                  Oknha Nou Kan Street (St. 105) <br />
                  443A Preah Monivong Blvd (93) Phnom Penh, Cambodia
                </p>
              </div>
            </div>
          </div>
          <div className="py-12 w-full lg:w-6/12 z-20">
            <MapComponent />
          </div>
        </div>
      </section>
      {/* <div className="w-full z-0 h-[210px] bg-[#333333] absolute left-0 lg:top-[390rem] xs:hidden lg:inline"></div> */}
    </>
  );
}
