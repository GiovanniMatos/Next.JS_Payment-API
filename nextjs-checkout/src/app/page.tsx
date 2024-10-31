// import Image from "next/image";

import Header from "../components/Header";
import Description from "../components/Description";
import Footer from "../components/Footer";
import CopyLink from "../components/CopyLink";
import NavCategory from "../components/NavCategory";
import DefaultCheckout from "../components/CheckoutOptions";

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-4 pt-6">
        <Header />
        <div className="w-full h-[2px] bg-orange-700 mb-4 mt-4"/>
        <h1 className="text-3xl flex font-bold justify-center mb-3">Product Description</h1>
        <Description />
        <div className="w-full h-[2px] bg-orange-700 mt-4 mb-4"/>
        <DefaultCheckout />
        <CopyLink />
        <NavCategory />
      </div>
      <Footer />
    </>
  );
}
