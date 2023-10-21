import React, { useState, useEffect } from 'react';
import '../index.css';

const announcementsData = [
    {
      announcement:'Raising awareness on climate change and health',
      link:'https://www.who.int/europe/activities/raising-awareness-on-climate-change-and-health'
    },
    {
      announcement:'G20 Summit 2023 LIVE: President of \'Bharat\' dinner invitations triggers row, Opposition slams Centre.',
      link:'https://www.cnbctv18.com/india/g20-summit-2023-in-delhi-live-updates-police-traffic-list-of-metro-stations-closed-road-railway-routes-joe-biden-xi-jinping-russia-narendra-modi-17707921.htm'
    },
    {
      announcement:'COP27: Key Takeaways and What’s Next',
      link:'https://www.wri.org/insights/cop27-key-outcomes-un-climate-talks-sharm-el-sheikh'
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