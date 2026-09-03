import { img } from '@/constants';
import {
  FaBullhorn,
  FaChild,
  FaHandsHelping,
  FaMusic,
  FaPrayingHands,
  FaUsers,
} from 'react-icons/fa';

export const ministries = [
  {
    icon: FaChild,
    name: 'Youth Ministry',
    desc: 'Raising bold, spiritually-grounded young believers.',
  },
  {
    icon: FaUsers,
    name: "Women's Ministry",
    desc: 'Sisters in fellowship, prayer, and kingdom purpose.',
  },
  {
    icon: FaHandsHelping,
    name: "Men's Ministry",
    desc: 'Building men of integrity, faith and service.',
  },
  {
    icon: FaMusic,
    name: 'Choir Ministry',
    desc: 'Worship unto the Lord through song and sound.',
  },
  {
    icon: FaPrayingHands,
    name: 'Prayer Department',
    desc: 'Standing in the gap through fervent intercession.',
  },
  {
    icon: FaBullhorn,
    name: 'Evangelism Team',
    desc: 'Carrying the gospel to streets, homes and nations.',
  },
];

export const galleryPreview = [
  {
    src: img.image_d,
    title: 'Sunday Worship',
    description: 'Choir ministrations lifting praise to the Most High.',
  },
  {
    src: img.image_m,
    title: 'Night of Revival',
    description: 'Open-air crusade reaching the lost in our community.',
  },
  {
    src: img.image_e,
    title: 'Hour of Impartation',
    description: 'Prophet ministering at the altar of healing.',
  },
  {
    src: img.image_g,
    title: 'River Baptism',
    description: 'New believers entering the covenant by water.',
  },
  {
    src: img.image_h,
    title: 'Evening Watch',
    description: 'Stillness before God in the late candle hour.',
  },
  {
    src: img.image_j,
    title: 'International Pulpit',
    description: 'Carrying the Word across nations.',
  },
  {
    src: img.image_f,
    title: 'Youth Encounter',
    description: 'A generation lifting up holy hands.',
  },
  {
    src: img.image_i,
    title: "Women's Fellowship",
    description: 'Daughters of Zion gathered in unity.',
  },
];

export const founderImages = [
  img.image_p,
  img.image_r,
  img.founder3,
  img.founder7,
  img.founder8,
  img.founder9,
  img.founder10,
  img.founder11,
  img.founder12,
  img.founder13,
  img.founder14,
  img.founder15,
];
