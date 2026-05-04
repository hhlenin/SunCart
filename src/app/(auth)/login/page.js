import {Facebook, Google, Instagram, LinkedIn, ShoppingCart, Star, X} from "@deemlol/next-icons";
import Link from "next/link";
import {commonDivClass} from "@/app/lib/css";
import Image from "next/image";
import footer from "daisyui/components/footer";

export default function LoginPage() {
  return (
      <div>
          <div className="space-y-4">
              <h3 className="text-4xl font-extrabold">Login to Your Account</h3>
              <p className="text-2xl font-medium text-gray-500">Email, password, Google login, and error state area.</p>
          </div>
          <div className="space-y-3">
              <fieldset className="fieldset">
                  <legend className="fieldset-legend text-xl text-gray-500">Email</legend>
                  <input type="text" className="input w-full" placeholder="Type here" />
              </fieldset>
              <fieldset className="fieldset">
                  <legend className="fieldset-legend text-xl text-gray-500">Password</legend>
                  <input type="password" className="input w-full" placeholder="Type here" />
              </fieldset>
              <fieldset className="space-y-2">
                  <button className="btn btn-primary btn-block btn-lg">Login</button>
                  <button className="btn btn-block btn-lg"><Google/> Login With Google</button>
              </fieldset>
          </div>
      </div>



  );
}
