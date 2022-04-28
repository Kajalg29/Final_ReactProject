import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as IconName from "react-icons/ai";
import { FiPieChart,FiCalendar } from "react-icons/fi";


export const  SidebarData = [
  {
    title: 'Dashbord',
    path: '/dashboard',
     icon: <IconName.AiFillAppstore />,
    cName: 'nav-text'
  },
 
  {
    title: 'Products',
    path: '/Products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
   {
    title: 'FileManager',
    path: '/Dash',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
   {
    title: 'Trafic analyzer',
    path: '/Dash',
    icon: <FiPieChart />,
    cName: 'nav-text',
  },
  {
    title: 'UserList',
    path: '/UserList',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Adduser',
    path: '/adduser',
    icon: <AiIcons.AiOutlineUserAdd/>,
    cName: 'nav-text'
  },
  {
    title: 'Calender',
    path: '/Dash',
    icon: <FiCalendar/>,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/Dash',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },

 {
    title: 'Payment',
    path: '/Dash',
    icon: <IconName.AiOutlineCreditCard/>,
    cName: 'nav-text',
  },


 
];