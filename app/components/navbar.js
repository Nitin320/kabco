'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import '../css/home.css';

const menuItems = [
  'Home',
  'Schemes',
  'Market Intelligence & BDS',
  'FPO & Agri MSME Ecosystem',
  'Case-let & Publications',
  'Gallery',
  'Contact Us',
];

const dropdowns = [
  [],
  ['Govt.of India Schemes', 'Kerala State Govt Schemes', 'NAWODHAN', 'AIF', 'Central Schemes', 'Credit Schemes', 'MSME', 'KERA'],
  ['List of Buyers', 'KABCO-connect', 'Exhibitions', 'BP Providers', 'Model DPRs'],
  ['World Markets', 'Agri-Parks', 'FPOs in Kerala'],
  ['FPO Videos', 'Presentations', 'Booklets'],
  [],
  [],
];

const Navbar = () => {
  const router = useRouter();

  const [openIndex, setOpenIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const gotocontact = () => {
    router.push('/contact-us'); // Replace with the actual path to your Contact Us page
  };

  const goToPage = (page) => {
    // Optional: you can add routing for other pages here
    if (page === 'Home') {
      router.push('/');
    } else if (page === 'Gallery') {
      router.push('/gallery');
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Image src="/home/KABCO.png" alt="Company Logo" width={60} height={30} />
      </div>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Menu Items */}
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <div key={item} className="navItem">
            <span
              onClick={() => {
                if (item === 'Contact Us') {
                  gotocontact();
                } else if (item === 'Home' || item === 'Gallery') {
                  goToPage(item);
                } else {
                  handleClick(index);
                }
              }}
            >
              {item}
            </span>

            {openIndex === index && dropdowns[index].length > 0 && (
              <div className="dropdown">
                {dropdowns[index].map((option, optIdx) => (
                  <a href="#" key={optIdx}>{option}</a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
