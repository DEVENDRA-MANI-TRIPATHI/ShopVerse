
import configPromise from '@payload-config'
import { getPayload } from 'payload';
import {Category} from '@/payload-types'

import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";
interface Props{
    children: React.ReactNode;
};

const Layout = async({ children }: Props) => {


      const payload = await getPayload({
    config:configPromise,
  })

  const data = await payload.find({
    collection: "categories",
    pagination: false,
    depth: 1,
    where: {
      parent: {
        exists: false,
      },
    },
  });


  const formatedData = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      // Because of 'depth:1' the doc will be "category"
      ...(doc as Category),
      subcategories:undefined,
    }))
  }));

  console.log({
    data,
    formatedData,
  })

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <SearchFilters data={ formatedData } />
            <div className="flex flex-1 bg-[#F4F4F0]">
                {children}
            </div>
            
            <Footer/>
        </div>
    );
}


export default Layout;