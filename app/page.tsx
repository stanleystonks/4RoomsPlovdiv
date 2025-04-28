// import { DatePickerForm } from "@/components/date-picker-form";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPinHouse, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-green-100">
        <div>
          <img width={300} src="Black Minimal House Logo.svg" />
        </div>
        {/* <DatePickerForm /> */}
        <div className="flex flex-col items-center gap-3 bg-white px-6 py-4">
          <a href="tel:+359882263083" className="flex items-center gap-1">
            <PhoneCall /> <span className="font-bold">+359 882 26 3083</span>
          </a>
          <a href="tel:+359882040595" className="flex items-center gap-1">
            <PhoneCall /> <span className="font-bold">+359 882 04 0595</span>
          </a>
          <Separator />
          <a
            href="mailto:bookings@4roomsplovdiv.com"
            className="flex items-center gap-1"
          >
            <Mail />
            <span className="font-bold">bookings@4roomsplovdiv.com</span>
          </a>
          <a
            href="https://maps.app.goo.gl/LbBftkXKjSc5k7Tu5"
            className="flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPinHouse />
            <span className="font-bold">
              2 Konstantin Stoilov St, 4000 Plovdiv, Bulgaria
            </span>
          </a>

          <div className="mt-4 flex gap-4">
            <a
              href="https://www.facebook.com/4rooms4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={50}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-plain.svg"
              />
            </a>

            <a
              href="https://www.booking.com/hotel/bg/green-house-hostel.bg.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // clipRule="evenodd"
                // fillRule="evenodd"
                // height="2445"
                // stroke-linejoin="round"
                // stroke-miterlimit="1.414"
                viewBox="-.092 .015 2732.125 2671.996"
                width={50}
              >
                <path
                  d="m2732.032 513.03c0-283.141-229.978-513.015-513.118-513.015h-1705.89c-283.138 0-513.116 229.874-513.116 513.015v1645.965c0 283.066 229.978 513.016 513.118 513.016h1705.889c283.14 0 513.118-229.95 513.118-513.016z"
                  fill="#0c3b7c"
                />
                <path
                  d="m.001 1659.991h1364.531v1012.019h-1364.53z"
                  fill="#0c3b7c"
                />
                <g fill-rule="nonzero">
                  <path
                    d="m1241.6 1768.638-220.052-.22v-263.12c0-56.22 21.808-85.48 69.917-92.165h150.136c107.068 0 176.328 67.507 176.328 176.766 0 112.219-67.507 178.63-176.328 178.739zm-220.052-709.694v-69.26c0-60.602 25.643-89.424 81.862-93.15h112.657c96.547 0 154.41 57.753 154.41 154.52 0 73.643-39.671 159.67-150.903 159.67h-198.026zm501.037 262.574-39.78-22.356 34.74-29.699c40.437-34.74 108.163-112.876 108.163-247.67 0-206.464-160.109-339.614-407.888-339.614h-282.738v-.11h-32.219c-73.424 2.74-132.273 62.466-133.04 136.329v1171.499h453.586c275.396 0 453.148-149.917 453.148-382.135 0-125.04-57.424-231.889-153.972-286.244"
                    fill="#fff"
                  />
                  <path
                    d="m1794.688 1828.066c0-89.492 72.178-161.894 161.107-161.894 89.154 0 161.669 72.402 161.669 161.894 0 89.379-72.515 161.894-161.67 161.894-88.928 0-161.106-72.515-161.106-161.894"
                    fill="#00bafc"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>

        <footer className="text-muted-foreground w-full py-4 text-center text-sm">
          © {new Date().getFullYear()} Kapana Properties Ltd. All rights
          reserved.
        </footer>
      </div>
    </>
  );
}
