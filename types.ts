
import React from 'react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  fullDetails?: string[]; // New field for detailed view
}

export interface NavLink {
  name: string;
  href: string;
}

// Added Project interface for portfolio items
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  technicalDetails?: string[];
}
