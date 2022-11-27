
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Loginpic from "../assets/Loginpic.jpg";
import googleIcon from "../assets/google.png";
import styles from "../styles/Home.module.css";
import TextField from '@mui/material/TextField';
import Arrow from "../assets/right-arrow.png"
export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <div className="flex flex-row mt-10 mx-40 h-5/6">
        <div className="flex-1 bg-white pt-12 px-20 rounded-l-lg">
          <h1 className="font-semibold text-3xl ml-20">Welcome Back</h1>
          <div className="flex flex-row w-80 justify-items-center rounded-md space-x-8 py-2 px-4 mt-6 ml-10 ... ring-2 ring-gray-100 ring-inset">
            <Image src={googleIcon} alt="Image" width={20} height={3}/>
          <h1 className="border-black pl-10 font-semibold text-sm">Login with Google</h1>
          </div>
          <div className="relative flex py-4 items-center w-4/5 ml-10 mt-2" >
          <div className="flex-grow-[1] border-t border-gray-400"></div>
            <span className="flex-shrink mx-2 text-gray-400 text-sm mb-1">Or Login with Email</span>
              <div className="flex-grow-[1] border-t border-gray-400"></div>
             </div>

             <div className="flex flex-col w-4/5 ml-10 py-1">
             <TextField
                margin="normal"
                size="small"
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                size="small"
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <div className="flex flex-row mt-2">
              <p className="text-sm flex-1 ">Keep me logged in</p>
              <p  className="text-sm">Forgot Password</p>
             </div>
             <Link className="mt-4 justify-center items-center bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex" href="/">
              <button className="flex flex-row justify-center flex-1 items-center">
               <p className="flex-1">Log in</p>
               <Image
          src={Arrow}
          alt="Image" 
          width={20}
          height={60}
          priority
          className="rounded-r-lg"
        />
              </button></Link>
             </div>

        </div>
        <Image
          src={Loginpic}
          alt="Image" 
          width={400}
          height={500}
          priority
          className="rounded-r-lg"
        />
      </div>

    </div>
  );
}
