"use client"
import {
    NavigationMenu,
   
    NavigationMenuItem,
  
    NavigationMenuList,
    
  } from "@/components/ui/navigation-menu"
import Image from "next/image";
import logo from '../../public/pics/Logo.webp'
import { ShoppingCart } from "lucide-react";
  
  
  const Menu = () => {
    return (
      <div className="flex  items-center justify-centre py-4 my-3">
        <Image className="ml-7" src={logo} alt="logo"/>

        <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="px-4">
          Female
        </NavigationMenuItem>
        <NavigationMenuItem className="px-4">
          Male
        </NavigationMenuItem>
        <NavigationMenuItem className="px-4">
          Kids
        </NavigationMenuItem>
        <NavigationMenuItem className="px-4">
          All Products
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <ShoppingCart className="text-4xl mr-7"/>
      </div>
    )
  }
  
  export default Menu
