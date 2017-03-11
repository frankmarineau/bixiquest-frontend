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
      station: {
        id: 4,
        name: 'Awessome station',
        pos: [45.494264, -73.572182]
      },
      places: [{
        id: '21axer332',
        name: 'Awesome place',
        image_url: 'http://placekitten.com/200/300',
        type: 'restaurant',
        pos: [45.505430, -73.571731]
      }, {
        id: '21axer332',
        name: 'Awesome place 2',
        image_url: 'http://placekitten.com/200/300',
        type: 'bar',
        pos: [45.506956, -73.569499]
      }]
    }, {
      id: 2,
      station: {
        id: 4,
        name: 'Yolo station',
        pos: [45.509431, -73.568392]
      },
      places: [{
        id: '21axer332',
        name: 'yo sup',
        image_url: 'http://placekitten.com/200/300',
        type: 'restaurant',
        pos: [45.506863, -73.563535]
      }, {
        id: '21axer332',
        name: 'hey gee',
        image_url: 'http://placekitten.com/200/300',
        type: 'bar',
        pos: [45.509344, -73.561228]
      }]
    }]
  }]
})
