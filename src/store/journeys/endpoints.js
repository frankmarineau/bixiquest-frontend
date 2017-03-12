export const list = async coords => ({
  journeys: [{
    id: 1,
    name: 'Awesome Journey',
    author: 'Jesse Thebest',
    distance: 40,
    duration: 150,
    rating: 4,
    steps: [{
      id: 1,
      distance: 300,
      station: {
        id: 4,
        name: 'Awessome station',
        pos: [45.494264, -73.572182]
      },
      places: [{
        id: '21axer332',
        name: 'Awesome place',
        image_url: 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg',
        type: 'restaurant',
        description: 'I love this place. It is the best in the world.',
        pos: [45.505430, -73.571731],
      }, {
        id: '21axer333',
        name: 'Awesome place 2',
        image_url: 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg',
        type: 'bar',
        description: 'Fun stuff, cool people.',
        pos: [45.506956, -73.569499]
      }]
    }, {
      id: 2,
      distance: 1500,
      station: {
        id: 4,
        name: 'Yolo station',
        pos: [45.509431, -73.568392]
      },
      places: [{
        id: '21axer332',
        name: 'yo sup',
        image_url: 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg',
        type: 'park',
        description: 'Pretty.',
        pos: [45.506863, -73.563535]
      }, {
        id: '21axer333',
        name: 'hey gee',
        image_url: 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg',
        type: 'bar',
        description: 'This bar is IN-SANE.',
        pos: [45.509344, -73.561228]
      }]
    }]
  }, {
    id: 2,
    name: 'Meow meow',
    author: 'Jesse Thebest',
    distance: 40,
    duration: 150,
    steps: [{
      id: 1,
      distance: 300,
      station: {
        id: 4,
        name: 'Awessome station',
        pos: [45.494264, -73.572182]
      },
      places: [{
        id: '21axer332',
        name: 'Awesome place',
        image_url: 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg',
        type: 'restaurant',
        description: 'I LOVEEEE THIS PLACE!!!',
        pos: [45.505430, -73.571731]
      }, {
        id: '21axer333',
        name: 'Awesome place 2',
        image_url: 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg',
        type: 'bar',
        description: 'Worth a look.',
        pos: [45.506956, -73.569499]
      }]
    }, {
      id: 2,
      distance: 2500,
      station: {
        id: 4,
        name: 'Yolo station',
        pos: [45.509431, -73.568392]
      },
      places: [{
        id: '21axer332',
        name: 'yo sup',
        image_url: 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg',
        type: 'park',
        description: 'Highly recommended.',
        pos: [45.506863, -73.563535]
      }, {
        id: '21axer333',
        name: 'hey gee',
        image_url: 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg',
        type: 'bar',
        description: 'Okay-ish.',
        pos: [45.509344, -73.561228]
      }]
    }]
  }]
})
