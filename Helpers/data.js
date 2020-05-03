export const categories = [
    {
        id: 1,
        name: 'Cookies',
        photo_url: 'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
    },
    {
        id: 2,
        name: 'Mexican Food',
        photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
    },
    {
        id: 3,
        name: 'Italian Food',
        photo_url:'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    },
    {
        id: 4,
        name: 'Smoothies',
        photo_url:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
    },
    {
        id: 5,
        name:'Pizza',
        photo_url:'https://amp.businessinsider.com/images/5c084bf7bde70f4ea53f0436-750-563.jpg'
    }
];

export const recipes = [
    {
        recipeId: 122,
        categoryId: 1,
        title: 'Oatmeal Cookies',
        photo_url: 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
        time: '15',
        likes: 0,
        ingredients: [
             {
                 id: 0,
                 name: 'Oil',
                 quantity: '200ml',
                 isChecked: false
             },
             {
                 id: 1,
                 name: 'Salt',
                 quantity: '5g',
                 isChecked: false
             }
        ],
        steps: [
          {
              id:0,
              description: "Battez le beurre et les deux sucres (roux et blanc) ensemble jusqu'à l'obtention d'une crème homogène",
              isChecked: false
          },
          {
              id: 1,
              descriptions: "Dans un second bol, mélangez la farine avec la levure chimique",
              isChecked: false
          },
          { id:2,
            description:"Laissez reposer la pâte au réfrigérateur pendant au moins 1 heure.",
            isChecked: false
          }
        ]
      },
      {
        recipeId: 3,
        categoryId: 4,
        title: 'Triple Berry Smoothie',
        photo_url:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
        time: '10',
        ingredients: [
            {   
                id: 1,
                name: 'Banana',
                quantity: '1',
                isChecked: false
            },
            {
                id: 2,
                name:'Frozen Straberries',
                quantity: '1/2 lbs',
                isChecked: false
            },
            { 
                id: 3,
                name: 'c. almond milk',
                quantity:'1 1/4',
                isChecked: false         
            },
            { 
                id: 4,
                name:'c. Greek yogurt',
                quantity:'1/2',
                isChecked: false
            }
        ],
        steps: [
            {   
                id: 1,
                description: "In a blender, combine all ingredients and blend until smooth. ",
                isChecked: false
            },
            {
                id: 2,
                description:"Divide between 2 cups and top with blackberries, if desired.", 
                isChecked: false
            }
        ],
        likes: 9
      },
      {
        recipeId: 2,
        categoryId: 1,
        title: 'Vegan Cookies',
        photo_url: 'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
        time: '30',
        likes: 5,
        ingredients: [
            {
                id: 1,
                name:'oil',
                quantity:'2 quarts',
                isChecked: false
            },
            {
                id: 2,
                name:'Eggs',
                quantity:'1',
                isChecked: false
            },
            {
                id: 3,
                name:"cup spelt flour",
                quantity:"1",
                isChecked: false
            },
            {
                id: 4,
                name:"tablespoons spelt flour",
                quantity:"2",
                isChecked: false
            }
        ],
        steps: [
            {   
                id: 1,
                description: "Preheat oven to 350 degrees F (175 degrees C). Line a baking sheet with parchment paper.",
                isChecked: false
            },
            {
                id: 2,
                description:"Combine 1 cup plus 2 tablespoons spelt flour, baking soda, cinnamon, and salt",
                isChecked: false
            },
            {
                id: 3,
                description:"Combine water and 1 tablespoon grape molasses in a small bowl or shallow dish. Place sesame seeds in a second bowl. Roll balls in the molasses; coat with sesame seeds. Place 2 inches apart on the baking sheet. Flatten with the bottom of a glass.",
                isChecked: false
            },
            {
                id: 4,
                description:"Bake in the preheated until lightly browned, 8 to 10 minutes. Let cool on the baking sheet.",
                isChecked: false
            }
        ],
       
      },
      {
        recipeId: 33,
        categoryId: 1,
        title: 'Pumpkin Spice Cookies',
        photo_url:
          'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
        time: '45',
        likes: 4,
        ingredients: [
            {
                id: 0,
                name:'oil',
                quantity:'2 tablespoons',
                isChecked: false
            },
            {
                id: 1,
                quantity:'1/2',
                name:'Onion chopped',
                isChecked: false
            },
            {
                id: 2,
                quantity:'1',
                name:'Cup Canned Pumpkin',
                isChecked: false
            }
        ],
        steps: [
            {
                id: 1,
                description:"In a mixer cream the butter and sugar until light and fluffy.",
                isChecked: false
            },
            {
                id: 2,
                description:"Add eggs and pumpkin and mix well.",
                isChecked: false
            },
            {
                 id: 3,
                 description:"Sift flour, baking powder, salt and spices together and fold into cookie batter.",
                 isChecked: false
            },
            {
                id: 4,
                description:"Mix until well blended.",
                isChecked: false
            }
        ]
     
      },
      {
        recipeId: 1,
        categoryId: 1,
        title: 'Brownies',
        photo_url: 'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
        time: '30',
        likes: 3,
        ingredients: [
            {
                id: 0,
                name:'oil',
                quantity:'2 tablespoons',
                isChecked: false
            },
            {
                id: 1,
                quantity:'1/2',
                name:'Onion chopped',
                isChecked: false
            }
        ],
        steps: [
            {
             id: 1,
             description:"Faites fondre le chocolat cassé en morceaux avec le beurre."   
            },
            {
                id: 2,
                description:"Pendant ce temps, battez les oeufs avec le sucre jusqu'à ce que le mélange blanchisse."   
           },
           {
               id: 3,
               description:"Ajoutez la farine, le sucre vanillé, et ajoutez le chocolat."
           },
           {
               id: 4,
               description:"Versez le tout dans un moule, et enfournez à 180°C (thermostat 6)pendant 15 min..."
           }
        ]
      }
];