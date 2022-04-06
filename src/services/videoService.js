const videos = [
  {
    _id: "1",
    title: "Recovery in sports - What really makes sense?",
    path: "",
  },
  {
    _id: "2",
    title: "In just 3 steps: This is how endurance training is fun!",
    path: "",
  },
  {
    _id: "3",
    title: "Endurance running and team sports? That doesn't make sense!",
    path: "",
  },
  {
    _id: "4",
    title: "Supplements in sports: That's what's behind it!",
    path: "",
  },
  {
    _id: "5",
    title: "Sports nutrition: 9 rules to improve your performance!",
    path: "",
  },
  {
    _id: "6",
    title: "Challenges: Are you better than your teamate?",
    path: "",
  },
];

export function getVideos() {
  return videos;
}

export function getVideo(id) {
  return videos.filter((video) => video._id === id)[0];
}
