import React from "react";
export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Create Event",
    route: "/events/create",
  },
  // {
  //   label: 'My Profile',
  //   route: '/profile',
  // },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(), //
  endDateTime: new Date(), //new Date()
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
