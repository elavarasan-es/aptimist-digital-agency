import * as React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import { Menu, X, Home, Info, ShoppingBag, Wrench, GalleryHorizontal, Briefcase, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface MobileNavProps {
  openMenu: boolean;
}

export default function MobileNav({ openMenu }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navLinks = [
    { label: 'HOME', path: '/', icon: <Home size={18} /> },
    { label: 'ABOUT US', path: '/about-us', icon: <Info size={18} /> },
    { label: 'PRODUCTS', path: '/products', icon: <ShoppingBag size={18} /> },
    { label: 'SERVICES', path: '/services', icon: <Wrench size={18} /> },
    { label: 'SHOWCASE', path: '/showcase', icon: <GalleryHorizontal size={18} /> },
    { label: 'CAREERS', path: '/careers', icon: <Briefcase size={18} /> },
    { label: 'CONTACT US', path: '/contact-us', icon: <Mail size={18} /> },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.path} disablePadding>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `w-full block px-2 ${
                  isActive ? 'text-[#005f85] bg-[#e0f8f8]' : 'text-gray-700'
                } hover:bg-[#d5ffff] transition duration-200`
              }
            >
              <ListItemButton>
                <ListItemIcon className="min-w-[30px]">{link.icon}</ListItemIcon>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="md:hidden">
      <div className="bg-white rounded-md" onClick={toggleDrawer(true)}>
        {openMenu ? (
          <X className="text-[#38C6C6] font-extrabold w-8 h-8 cursor-pointer" />
        ) : (
          <Menu className="text-[#38C6C6] font-extrabold w-8 h-8 cursor-pointer" />
        )}
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
