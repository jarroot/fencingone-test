import { PropsWithChildren } from "react";
import Header from "./components/Header";
import "./PageLayout.css";

export default function PageLayout( props: PropsWithChildren ) {
   return (
      <div className="page-layout">

         <Header/>

         <main>
            { props.children }
         </main>
      </div>
   )
}