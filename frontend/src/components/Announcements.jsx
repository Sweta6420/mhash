import React, { useState, useEffect } from 'react';
import '../index.css';

const announcementsData = [
    {
      announcement:'Join us in raising awareness about climate change.',
      link:'https://www.google.com'
    },
    {
      announcement:'Stay tuned for updates on the G20 summit discussions.',
      link:'https://www.google.com'
    },
    {
      announcement:'COP 27 summit is approaching; get ready for action!.',
      link:'https://www.google.com'
    },
   {
      announcement:'Antarctica in crisis: Ice shelves shrinking fast with no sign of recovery.',
      link:'https://www.indiatoday.in/science/story/antarctica-in-crisis-ice-shelves-shrinking-fast-with-no-sign-of-recovery-2450063-2023-10-17'
    },
   {
      announcement:'COP28 Prez seeks plans to cut 22 gigatons of greenhouse emissions in 7 years.',
      link:'https://www.hindustantimes.com/environment/cop28-prez-seeks-plans-to-cut-22-gigatons-of-greenhouse-emissions-in-7-years-101697689638053.html'
    }
  ];

const Announcements = () => {
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    let cooldown = false;

    const interval = setInterval(() => {
      if (cooldown) {
        setShowAnnouncement(true);
        setCurrentAnnouncementIndex(
          (currentAnnouncementIndex + 1) % announcementsData.length
        );
      } else {
        setShowAnnouncement(false);
      }

      cooldown = !cooldown;
    }, 15000); // Toggle every 15 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentAnnouncementIndex]);

  return (
    <div className="announcements-banner" style={{ display: showAnnouncement ? 'block' : 'none' }}>
      <p><a href={announcementsData[currentAnnouncementIndex].link} target="_blank">{announcementsData[currentAnnouncementIndex].announcement}</a></p>
    </div>
  );
};

export default Announcements;