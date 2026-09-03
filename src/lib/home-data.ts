import type { GalleryImage } from '@/components/LightboxGallery';
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

export const galleryPreview: GalleryImage[] = [
  { src: img.image_d },
  { src: img.image_m },
  { src: img.image_e },
  { src: img.image_g },
  { src: img.image_h },
  { src: img.image_j },
  { src: img.image_f },
  { src: img.image_i },
  { src: img.image_n },
  { src: img.image_o },
  { src: img.image_v },
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
