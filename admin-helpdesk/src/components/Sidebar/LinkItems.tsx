import { FiPhone } from "react-icons/fi";
import { BsPerson, BsExclamationCircle } from "react-icons/bs"
import React from "react";

interface LinkItemProps {
    name: string
    icon: React.ReactNode
    link: string
}
  
export const LinkItems: LinkItemProps[] = [
    // tab 1: call list + creating a call entity, retrieve information about caller + equipment page
    { name: 'Calls', icon: <FiPhone size="18px" />, link: 'calls' }, 
    { name: 'Specialist', icon: <BsPerson size="20px" />, link: 'specialist' },
    // tab 1: problem page, tab 2: problem category page
    { name: 'Problems', icon: <BsExclamationCircle size="20px" />, link: 'problems' }, 
  ]