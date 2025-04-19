// import { prisma } from "@/lib/db";
import { prisma } from "../src/lib/db";

async function main() {
    await prisma.foods.createMany({
        data: [
            {
                food_id: "food_001",
                food_name: "Chicken Biryani",
                calories: 292,
                protein: 21.0,
                carbs: 34.0,
                fats: 10.0,
                fiber: 2.0,
                sugar: 1.0,
                sodium: 520.0,
                potassium: 380.0,
                iron: 1.2,
                portion_size: "plate",
                default_quantity: 1,
                description:
                    "Chicken Biryani is a classic Indian rice dish made with marinated chicken, layered basmati rice, and aromatic spices. Slow-cooked on dum, it’s flavorful, festive, and perfect for special occasions.",
                instructions:
                    "Step 1: Mix yogurt, ginger-garlic paste, turmeric, chili powder, garam masala, salt, and lemon juice in a bowl >> Step 2: Add chicken and marinate for 6–8 hours >> Step 3: Rinse and soak basmati rice for 30 minutes >> Step 4: Boil water with whole spices and salt >> Step 5: Cook rice until 70% done and drain >> Step 6: Fry sliced onions in ghee or oil until golden brown >> Step 7: Remove half of fried onions for garnish >> Step 8: Sear marinated chicken in the pot for 4–5 minutes >> Step 9: Soak saffron in warm milk >> Step 10: Layer half the rice over chicken and top with saffron milk, onions, mint, and cilantro >> Step 11: Repeat layering with remaining ingredients >> Step 12: Cover tightly and dum-cook on low heat for 25 minutes >> Step 13: Let rest for 10 minutes >> Step 14: Fluff gently and serve hot with raita or salad",
                ingredients:
                    "Bone-in Chicken (1.2 kg), Basmati Rice (2 cups), Plain Yogurt (1 cup), Ginger-Garlic Paste (1 tbsp), Turmeric (1 tsp), Red Chili Powder (1 tsp), Garam Masala (1 tbsp), Salt (to taste), Lemon Juice (1/2 lemon), Ghee or Oil (4 tbsp), Onions (2 large, sliced), Mint Leaves (1/2 cup, chopped), Cilantro (1/2 cup, chopped), Saffron Strands (15), Warm Milk (1/4 cup), Bay Leaves (2), Green Cardamom Pods (4), Black Cardamom Pods (2), Cloves (4), Cinnamon Stick (1, 2-inch), Star Anise (1), Water (10 cups)",
            },
            {
                food_id: "food_002",
                food_name: "Vegetable Biryani",
                calories: 250,
                protein: 5.0,
                carbs: 40.0,
                fats: 8.0,
                fiber: 3.0,
                sugar: 2.0,
                sodium: 480.0,
                potassium: 350.0,
                iron: 1.0,
                portion_size: "plate",
                default_quantity: 1,
                description:
                    "Vegetable Biryani is a fragrant rice dish made with mixed vegetables, basmati rice, and a blend of spices. It's a popular vegetarian option that is flavorful and filling.",
                instructions:
                    "Step 1: Heat oil in a pot and add cumin seeds >> Step 2: Add chopped onions and sauté until golden >> Step 3: Add mixed vegetables and sauté for a few minutes >> Step 4: Add ginger-garlic paste and sauté >> Step 5: Stir in biryani masala and mix >> Step 6: Add soaked basmati rice and water >> Step 7: Cook until rice is done and water is absorbed >> Step 8: Let it rest for 10 minutes before serving.",
                ingredients:
                    "Basmati Rice (2 cups), Mixed Vegetables (2 cups, chopped), Onions (2 large, sliced), Ginger-Garlic Paste (1 tbsp), Biryani Masala (2 tbsp), Oil (4 tbsp), Cumin Seeds (1 tsp), Salt (to taste), Water (4 cups)",
            },
            {
                food_id: "food_003",
                food_name: "Paneer Tikka",
                calories: 300,
                protein: 20.0,
                carbs: 10.0,
                fats: 20.0,
                fiber: 2.0,
                sugar: 3.0,
                sodium: 600.0,
                potassium: 400.0,
                iron: 2.0,
                portion_size: "skewers",
                default_quantity: 2,
                description:
                    "Paneer Tikka is a popular Indian appetizer made with marinated paneer cubes grilled to perfection. It's smoky, spicy, and pairs well with mint chutney.",
                instructions:
                    "Step 1: Cut paneer into cubes and marinate with yogurt, spices, and lemon juice >> Step 2: Skewer the paneer with bell peppers and onions >> Step 3: Grill on high heat until charred and cooked >> Step 4: Serve hot with mint chutney.",
                ingredients:
                    "Paneer (500g), Yogurt (1 cup), Bell Peppers (1 cup, chopped), Onions (1 cup, chopped), Lemon Juice (2 tbsp), Spices (cumin, coriander, chili powder, garam masala), Salt (to taste)",
            },
            {
                food_id: "food_004",
                food_name: "Chole Bhature",
                calories: 450,
                protein: 15.0,
                carbs: 65.0,
                fats: 15.0,
                fiber: 6.0,
                sugar: 5.0,
                sodium: 700.0,
                potassium: 500.0,
                iron: 3.0,
                portion_size: "plate",
                default_quantity: 1,
                description:
                    "Chole Bhature is a North Indian dish consisting of spicy chickpeas (chole) served with deep-fried bread (bhature). It's a hearty meal loved by many.",
                instructions:
                    "Step 1: Soak chickpeas overnight and boil until soft >> Step 2: In a pan, heat oil and add cumin seeds >> Step 3: Add onions, tomatoes, and spices to make the gravy >> Step 4: Add boiled chickpeas and simmer >> Step 5: For bhature, mix flour, yogurt, and water to make dough >> Step 6: Roll out and deep fry until golden >> Step 7: Serve hot with chole.",
                ingredients:
                    "Chickpeas (1 cup), Onions (2, chopped), Tomatoes (2, chopped), Flour (2 cups), Yogurt (1/2 cup), Spices (cumin, coriander, garam masala), Oil (for frying), Salt (to taste)",
            },
            {
                food_id: "food_005",
                food_name: "Aloo Gobi",
                calories: 180,
                protein: 4.0,
                carbs: 30.0,
                fats: 7.0,
                fiber: 5.0,
                sugar: 2.0,
                sodium: 350.0,
                potassium: 300.0,
                iron: 1.5,
                portion_size: "plate",
                default_quantity: 1,
                description:
                    "Aloo Gobi is a dry Indian curry made with potatoes (aloo) and cauliflower (gobi), flavored with spices. It's a simple yet delicious vegetarian dish.",
                instructions:
                    "Step 1: Heat oil in a pan and add cumin seeds >> Step 2: Add chopped onions and sauté >> Step 3: Add diced potatoes and cauliflower florets >> Step 4: Stir in spices and cook until vegetables are tender >> Step 5: Garnish with cilantro and serve hot.",
                ingredients:
                    "Potatoes (2, diced), Cauliflower (1 small, cut into florets), Onions (1 large, chopped), Spices (cumin, turmeric, coriander), Oil (2 tbsp), Salt (to taste), Cilantro (for garnish)",
            },
            {
                food_id: "food_006",
                food_name: "Dal Makhani",
                calories: 350,
                protein: 15.0,
                carbs: 45.0,
                fats: 15.0,
                fiber: 8.0,
                sugar: 3.0,
                sodium: 600.0,
                potassium: 400.0,
                iron: 2.0,
                portion_size: "bowl",
                default_quantity: 1,
                description:
                    "Dal Makhani is a rich and creamy lentil dish made with black lentils and kidney beans, simmered with spices and cream. It's a staple in North Indian cuisine.",
                instructions:
                    "Step 1: Soak lentils overnight and boil until soft >> Step 2: In a pot, heat butter and add ginger-garlic paste >> Step 3: Add tomatoes and spices to make the gravy >> Step 4: Add boiled lentils and kidney beans >> Step 5: Simmer on low heat, adding cream before serving.",
                ingredients:
                    "Black Lentils (1 cup), Kidney Beans (1/2 cup), Tomatoes (2, chopped), Ginger-Garlic Paste (1 tbsp), Cream (1/2 cup), Butter (2 tbsp), Spices (cumin, garam masala), Salt (to taste)",
            },
            {
                food_id: "food_007",
                food_name: "Rogan Josh",
                calories: 400,
                protein: 25.0,
                carbs: 15.0,
                fats: 30.0,
                fiber: 0.5,
                sugar: 2.0,
                sodium: 800.0,
                potassium: 450.0,
                iron: 3.5,
                portion_size: "plate",
                default_quantity: 1,
                description:
                    "Rogan Josh is a traditional Kashmiri lamb dish, known for its rich and aromatic curry made with yogurt and spices. It's best enjoyed with rice or naan.",
                instructions:
                    "Step 1: Marinate lamb in yogurt and spices >> Step 2: Heat oil in a pot and add onions >> Step 3: Add marinated lamb and cook until browned >> Step 4: Add water and simmer until tender >> Step 5: Serve hot with rice or naan.",
                ingredients:
                    "Lamb (500g, cut into pieces), Yogurt (1 cup), Onions (2, sliced), Spices (cumin, coriander, garam masala, red chili powder), Oil (for cooking), Salt (to taste)",
            },
            {
                food_id: "food_008",
                food_name: "Butter Chicken",
                calories: 500,
                protein: 30.0,
                carbs: 20.0,
                fats: 35.0,
                fiber: 1.0,
                sugar: 5.0,
                sodium: 900.0,
                potassium: 500.0,
                iron: 4.0,
                portion_size: "plate",
                default_quantity: 1,
                description:
                    "Butter Chicken is a popular Indian dish made with marinated chicken cooked in a creamy tomato sauce. It's rich, flavorful, and pairs well with naan or rice.",
                instructions:
                    "Step 1: Marinate chicken in yogurt and spices >> Step 2: Grill or pan-fry until cooked >> Step 3: In a pot, heat butter and add onions >> Step 4: Add tomatoes and cream to make the sauce >> Step 5: Add cooked chicken and simmer >> Step 6: Serve hot with naan or rice.",
                ingredients:
                    "Chicken (500g, cut into pieces), Yogurt (1 cup), Tomatoes (2, pureed), Cream (1/2 cup), Butter (4 tbsp), Onions (1 large, chopped), Spices (cumin, garam masala, red chili powder), Salt (to taste)",
            },
            {
                food_id: "food_009",
                food_name: "Pav Bhaji",
                calories: 350,
                protein: 8.0,
                carbs: 50.0,
                fats: 15.0,
                fiber: 5.0,
                sugar: 6.0,
                sodium: 700.0,
                potassium: 300.0,
                iron: 2.0,
                portion_size: "plate",
                default_quantity: 1,
                description:
                    "Pav Bhaji is a popular street food dish consisting of a spicy vegetable mash served with buttered bread rolls. It's a delightful and filling meal.",
                instructions:
                    "Step 1: Boil mixed vegetables until soft >> Step 2: Mash the vegetables and cook with spices >> Step 3: Toast pav (bread rolls) with butter >> Step 4: Serve bhaji with pav, garnished with onion and cilantro.",
                ingredients:
                    "Mixed Vegetables (2 cups, boiled), Pav (6 rolls), Butter (for toasting), Spices (cumin, coriander, red chili powder), Onions (for garnish), Cilantro (for garnish), Salt (to taste)",
            },
            {
                food_id: "food_010",
                food_name: "Samosa",
                calories: 250,
                protein: 5.0,
                carbs: 35.0,
                fats: 12.0,
                fiber: 3.0,
                sugar: 1.0,
                sodium: 600.0,
                potassium: 200.0,
                iron: 1.2,
                portion_size: "piece",
                default_quantity: 2,
                description:
                    "Samosa is a popular Indian snack made of a spiced potato filling encased in a crispy pastry. It's often served with chutney.",
                instructions:
                    "Step 1: Prepare dough with flour and water >> Step 2: Make filling with mashed potatoes and spices >> Step 3: Shape samosas and deep fry until golden brown >> Step 4: Serve hot with chutney.",
                ingredients:
                    "Potatoes (2, boiled and mashed), Flour (2 cups), Spices (cumin, coriander, garam masala), Oil (for frying), Water (for dough), Salt (to taste)",
            },
            {
                food_id: "food_011",
                food_name: "Dhokla",
                calories: 200,
                protein: 8.0,
                carbs: 35.0,
                fats: 5.0,
                fiber: 4.0,
                sugar: 2.0,
                sodium: 500.0,
                potassium: 300.0,
                iron: 1.5,
                portion_size: "piece",
                default_quantity: 2,
                description:
                    "Dhokla is a steamed savory cake made from fermented rice and chickpea flour. It's a popular snack in Gujarat, often served with green chutney.",
                instructions:
                    "Step 1: Prepare batter with rice and chickpea flour >> Step 2: Add spices and ferment overnight >> Step 3: Steam the batter until cooked >> Step 4: Cut into pieces and serve with chutney.",
                ingredients:
                    "Rice Flour (1 cup), Chickpea Flour (1 cup), Yogurt (1/2 cup), Spices (mustard seeds, turmeric), Salt (to taste), Water (as needed)",
            },
            {
                food_id: "food_012",
                food_name: "Pani Puri",
                calories: 150,
                protein: 2.0,
                carbs: 30.0,
                fats: 5.0,
                fiber: 1.0,
                sugar: 3.0,
                sodium: 400.0,
                potassium: 200.0,
                iron: 0.5,
                portion_size: "piece",
                default_quantity: 4,
                description:
                    "Pani Puri is a popular Indian street food consisting of hollow puris filled with spicy water and a mixture of potatoes and chickpeas.",
                instructions:
                    "Step 1: Prepare puris by frying dough balls until puffed >> Step 2: Make filling with mashed potatoes and chickpeas >> Step 3: Serve puris filled with spicy water and filling.",
                ingredients:
                    "Puris (12 pieces), Potatoes (2, boiled and mashed), Chickpeas (1/2 cup, boiled), Spices (cumin, chili powder), Tamarind Water (for serving), Salt (to taste)",
            },
            {
                food_id: "food_013",
                food_name: "Bhel Puri",
                calories: 180,
                protein: 4.0,
                carbs: 30.0,
                fats: 6.0,
                fiber: 2.0,
                sugar: 5.0,
                sodium: 300.0,
                potassium: 250.0,
                iron: 1.0,
                portion_size: "bowl",
                default_quantity: 1,
                description:
                    "Bhel Puri is a savory snack made from puffed rice, vegetables, and tangy tamarind sauce. It's a popular street food in India.",
                instructions:
                    "Step 1: Mix puffed rice with chopped onions, tomatoes, and potatoes >> Step 2: Add tamarind sauce and spices >> Step 3: Serve immediately for a crunchy snack.",
                ingredients:
                    "Puffed Rice (2 cups), Onions (1, chopped), Tomatoes (1, chopped), Potatoes (1, boiled and chopped), Tamarind Sauce (to taste), Spices (cumin, chili powder), Salt (to taste)",
            },
            {
                food_id: "food_014",
                food_name: "Kebabs",
                calories: 400,
                protein: 25.0,
                carbs: 15.0,
                fats: 30.0,
                fiber: 1.0,
                sugar: 2.0,
                sodium: 700.0,
                potassium: 300.0,
                iron: 3.0,
                portion_size: "skewers",
                default_quantity: 2,
                description:
                    "Kebabs are skewered and grilled meat or vegetable dishes, marinated in spices. They are popular in many cuisines and are often served with sauces.",
                instructions:
                    "Step 1: Marinate meat or vegetables in spices and yogurt >> Step 2: Skewer and grill until cooked >> Step 3: Serve hot with sauces.",
                ingredients:
                    "Meat (500g, cut into pieces), Yogurt (1 cup), Spices (cumin, coriander, garam masala), Skewers (for grilling), Salt (to taste)",
            },
            {
                food_id: "food_015",
                food_name: "Tandoori Chicken",
                calories: 350,
                protein: 30.0,
                carbs: 10.0,
                fats: 20.0,
                fiber: 0.5,
                sugar: 1.0,
                sodium: 600.0,
                potassium: 400.0,
                iron: 3.0,
                portion_size: "piece",
                default_quantity: 1,
                description:
                    "Tandoori Chicken is a popular Indian dish made with marinated chicken cooked in a tandoor (clay oven). It's smoky, spicy, and full of flavor.",
                instructions:
                    "Step 1: Marinate chicken in yogurt and spices >> Step 2: Cook in a tandoor or oven until charred >> Step 3: Serve hot with naan and salad.",
                ingredients:
                    "Chicken (500g, cut into pieces), Yogurt (1 cup), Spices (tandoori masala, cumin, coriander), Salt (to taste)",
            },
            {
                food_id: "food_016",
                food_name: "Palak Paneer",
                calories: 350,
                protein: 20.0,
                carbs: 15.0,
                fats: 25.0,
                fiber: 3.0,
                sugar: 2.0,
                sodium: 700.0,
                potassium: 300.0,
                iron: 4.0,
                portion_size: "bowl",
                default_quantity: 1,
                description:
                    "Palak Paneer is a North Indian dish made with paneer in a creamy spinach sauce. It's nutritious and pairs well with roti or rice.",
                instructions:
                    "Step 1: Blanch spinach and blend into a puree >> Step 2: In a pan, heat oil and add cumin seeds >> Step 3: Add onions and sauté, then add spinach puree >> Step 4: Add paneer and cream, simmer for a few minutes.",
                ingredients:
                    "Paneer (250g, cubed), Spinach (2 cups, blanched), Onions (1, chopped), Cream (1/4 cup), Spices (cumin, garam masala), Oil (for cooking), Salt (to taste)",
            },
            {
                food_id: "food_017",
                food_name: "Kheer",
                calories: 250,
                protein: 5.0,
                carbs: 40.0,
                fats: 10.0,
                fiber: 1.0,
                sugar: 20.0,
                sodium: 50.0,
                potassium: 200.0,
                iron: 0.5,
                portion_size: "bowl",
                default_quantity: 1,
                description:
                    "Kheer is a traditional Indian rice pudding made with milk, rice, and sugar, flavored with cardamom and garnished with nuts. It's a popular dessert.",
                instructions:
                    "Step 1: Boil milk and add rice >> Step 2: Cook until rice is soft >> Step 3: Add sugar and cardamom, simmer for a few minutes >> Step 4: Garnish with nuts and serve.",
                ingredients:
                    "Rice (1/2 cup), Milk (4 cups), Sugar (1/2 cup), Cardamom (1 tsp), Nuts (for garnish), Water (as needed)",
            },
            {
                food_id: "food_018",
                food_name: "Gulab Jamun",
                calories: 300,
                protein: 5.0,
                carbs: 40.0,
                fats: 15.0,
                fiber: 0.0,
                sugar: 25.0,
                sodium: 100.0,
                potassium: 150.0,
                iron: 1.0,
                portion_size: "piece",
                default_quantity: 2,
                description:
                    "Gulab Jamun is a popular Indian dessert made of deep-fried dough balls soaked in sugar syrup. It's sweet, rich, and indulgent.",
                instructions:
                    "Step 1: Prepare dough with khoya and flour >> Step 2: Shape into balls and deep fry until golden >> Step 3: Soak in sugar syrup for a few hours >> Step 4: Serve warm or at room temperature.",
                ingredients:
                    "Khoya (1 cup), Flour (1/2 cup), Sugar (2 cups), Water (1 cup, for syrup), Cardamom (1 tsp), Oil (for frying)",
            },
            {
                food_id: "food_019",
                food_name: "Rasgulla",
                calories: 150,
                protein: 5.0,
                carbs: 30.0,
                fats: 2.0,
                fiber: 0.0,
                sugar: 20.0,
                sodium: 50.0,
                potassium: 100.0,
                iron: 0.5,
                portion_size: "piece",
                default_quantity: 2,
                description:
                    "Rasgulla is a Bengali sweet made of soft cheese balls soaked in sugar syrup. It's light, spongy, and a favorite among many.",
                instructions:
                    "Step 1: Boil milk and curdle with lemon juice >> Step 2: Drain and rinse to get chenna (cheese) >> Step 3: Knead into smooth balls >> Step 4: Boil sugar syrup and add balls, cook until they double in size.",
                ingredients:
                    "Milk (1 liter), Lemon Juice (2 tbsp), Sugar (1 cup), Water (2 cups, for syrup)",
            },
            {
                food_id: "food_020",
                food_name: "Lassi",
                calories: 200,
                protein: 6.0,
                carbs: 30.0,
                fats: 8.0,
                fiber: 0.0,
                sugar: 15.0,
                sodium: 50.0,
                potassium: 200.0,
                iron: 0.5,
                portion_size: "glass",
                default_quantity: 1,
                description:
                    "Lassi is a traditional Indian yogurt drink, often flavored with fruits or spices. It's refreshing and perfect for hot days.",
                instructions:
                    "Step 1: Blend yogurt with water and sugar >> Step 2: Add fruits or spices as desired >> Step 3: Serve chilled.",
                ingredients:
                    "Yogurt (1 cup), Water (1/2 cup), Sugar (to taste), Fruits or spices (as desired)",
            },
            {
                food_id: "food_021",
                food_name: "Pongal",
                calories: 300,
                protein: 8.0,
                carbs: 55.0,
                fats: 5.0,
                fiber: 2.0,
                sugar: 1.0,
                sodium: 150.0,
                potassium: 300.0,
                iron: 1.0,
                portion_size: "bowl",
                default_quantity: 1,
                description:
                    "Pongal is a South Indian dish made with rice and lentils, flavored with ghee, pepper, and cumin. It's often served during festivals.",
                instructions:
                    "Step 1: Cook rice and lentils together >> Step 2: In a pan, heat ghee and add spices >> Step 3: Mix with cooked rice and lentils >> Step 4: Serve hot.",
                ingredients:
                    "Rice (1 cup), Moong Dal (1/4 cup), Ghee (2 tbsp), Spices (pepper, cumin), Salt (to taste)",
            },
            {
                food_id: "food_022",
                food_name: "Idli",
                calories: 150,
                protein: 5.0,
                carbs: 30.0,
                fats: 2.0,
                fiber: 1.0,
                sugar: 0.0,
                sodium: 300.0,
                potassium: 200.0,
                iron: 0.5,
                portion_size: "piece",
                default_quantity: 2,
                description:
                    "Idli is a traditional South Indian steamed rice cake, often served with sambar and chutney. It's a healthy breakfast option.",
                instructions:
                    "Step 1: Soak rice and urad dal overnight >> Step 2: Grind into a batter >> Step 3: Steam in idli molds until cooked >> Step 4: Serve with sambar and chutney.",
                ingredients:
                    "Rice (1 cup), Urad Dal (1/2 cup), Water (as needed), Salt (to taste)",
            },
            {
                food_id: "food_023",
                food_name: "Dosa",
                calories: 200,
                protein: 6.0,
                carbs: 35.0,
                fats: 5.0,
                fiber: 1.0,
                sugar: 0.0,
                sodium: 300.0,
                potassium: 250.0,
                iron: 1.0,
                portion_size: "piece",
                default_quantity: 1,
                description:
                    "Dosa is a thin and crispy South Indian crepe made from fermented rice and lentil batter. It's often served with chutney and sambar.",
                instructions:
                    "Step 1: Soak rice and urad dal overnight >> Step 2: Grind into a smooth batter >> Step 3: Heat a pan and pour batter to make a thin crepe >> Step 4: Cook until crispy and serve with chutney.",
                ingredients:
                    "Rice (1 cup), Urad Dal (1/2 cup), Water (as needed), Salt (to taste)",
            },
            {
                food_id: "food_024",
                food_name: "Biryani",
                calories: 400,
                protein: 20.0,
                carbs: 60.0,
                fats: 15.0,
                fiber: 3.0,
                sugar: 2.0,
                sodium: 600.0,
                potassium: 400.0,
                iron: 2.0,
                portion_size: "plate",
                default_quantity: 1,
                description:
                    "Biryani is a mixed rice dish originating from the Indian subcontinent, made with spices, rice, and meat or vegetables.",
                instructions:
                    "Step 1: Marinate meat or vegetables with spices >> Step 2: Cook rice separately >> Step 3: Layer rice and meat/vegetables in a pot >> Step 4: Cook on low heat until flavors meld.",
                ingredients:
                    "Basmati Rice (2 cups), Meat or Vegetables (500g), Spices (cumin, coriander, garam masala), Water (as needed), Salt (to taste)",
            },
            {
                food_id: "food_025",
                food_name: "Pulao",
                calories: 350,
                protein: 8.0,
                carbs: 55.0,
                fats: 10.0,
                fiber: 2.0,
                sugar: 3.0,
                sodium: 500.0,
                potassium: 300.0,
                iron: 1.0,
                portion_size: "plate",
                default_quantity: 1,
                description:
                    "Pulao is a rice dish cooked with vegetables and spices. It's a quick and flavorful meal option.",
                instructions:
                    "Step 1: Heat oil and add whole spices >> Step 2: Add chopped vegetables and sauté >> Step 3: Add rice and water, cook until done.",
                ingredients:
                    "Basmati Rice (2 cups), Mixed Vegetables (1 cup), Spices (cumin, bay leaf, cardamom), Water (4 cups), Salt (to taste)",
            },
            {
                food_id: "food_026",
                food_name: "Khichdi",
                calories: 300,
                protein: 10.0,
                carbs: 50.0,
                fats: 5.0,
                fiber: 4.0,
                sugar: 1.0,
                sodium: 300.0,
                potassium: 200.0,
                iron: 1.0,
                portion_size: "bowl",
                default_quantity: 1,
                description:
                    "Khichdi is a comfort food made with rice and lentils, cooked together with spices. It's nutritious and easy to digest.",
                instructions:
                    "Step 1: Rinse rice and lentils >> Step 2: Cook with water and spices until soft >> Step 3: Serve hot with ghee.",
                ingredients:
                    "Rice (1 cup), Moong Dal (1/2 cup), Water (4 cups), Spices (cumin, turmeric), Salt (to taste)",
            },
            {
                food_id: "food_027",
                food_name: "Methi Thepla",
                calories: 250,
                protein: 7.0,
                carbs: 40.0,
                fats: 8.0,
                fiber: 5.0,
                sugar: 1.0,
                sodium: 300.0,
                potassium: 200.0,
                iron: 1.5,
                portion_size: "piece",
                default_quantity: 2,
                description:
                    "Methi Thepla is a spiced flatbread made with fenugreek leaves. It's a popular dish in Gujarat, often served with yogurt.",
                instructions:
                    "Step 1: Prepare dough with whole wheat flour and chopped fenugreek >> Step 2: Roll out and cook on a hot griddle >> Step 3: Serve hot with yogurt.",
                ingredients:
                    "Whole Wheat Flour (2 cups), Fenugreek Leaves (1 cup, chopped), Spices (cumin, turmeric), Water (as needed), Salt (to taste)",
            },
            {
                food_id: "food_028",
                food_name: "Chaas",
                calories: 100,
                protein: 5.0,
                carbs: 10.0,
                fats: 3.0,
                fiber: 0.0,
                sugar: 5.0,
                sodium: 200.0,
                potassium: 150.0,
                iron: 0.5,
                portion_size: "glass",
                default_quantity: 1,
                description:
                    "Chaas is a refreshing yogurt-based drink, often flavored with spices. It's a cooling beverage, especially in summer.",
                instructions:
                    "Step 1: Blend yogurt with water and spices >> Step 2: Serve chilled.",
                ingredients:
                    "Yogurt (1 cup), Water (1/2 cup), Spices (cumin, salt), Mint Leaves (for garnish)",
            },
            {
                food_id: "food_029",
                food_name: "Pesarattu",
                calories: 250,
                protein: 10.0,
                carbs: 40.0,
                fats: 5.0,
                fiber: 3.0,
                sugar: 2.0,
                sodium: 300.0,
                potassium: 200.0,
                iron: 1.0,
                portion_size: "piece",
                default_quantity: 1,
                description:
                    "Pesarattu is a green gram dosa from Andhra Pradesh, often served with ginger chutney. It's a healthy breakfast option.",
                instructions:
                    "Step 1: Soak green gram overnight and grind into a batter >> Step 2: Cook on a hot griddle until crispy >> Step 3: Serve with chutney.",
                ingredients:
                    "Green Gram (1 cup), Ginger (1 inch, for chutney), Salt (to taste), Water (as needed)",
            },
            {
                food_id: "food_030",
                food_name: "Sooji Halwa",
                calories: 300,
                protein: 6.0,
                carbs: 50.0,
                fats: 10.0,
                fiber: 1.0,
                sugar: 20.0,
                sodium: 100.0,
                potassium: 200.0,
                iron: 0.5,
                portion_size: "bowl",
                default_quantity: 1,
                description:
                    "Sooji Halwa is a sweet dish made from semolina, cooked with ghee, sugar, and nuts. It's a popular dessert in Indian households.",
                instructions:
                    "Step 1: Heat ghee in a pan and add semolina >> Step 2: Roast until golden >> Step 3: Add water and sugar, cook until thick >> Step 4: Garnish with nuts.",
                ingredients:
                    "Semolina (1 cup), Ghee (1/2 cup), Sugar (1/2 cup), Water (2 cups), Nuts (for garnish)",
            },
            {
                food_id: "food_031",
                food_name: "Chole",
                calories: 350,
                protein: 15.0,
                carbs: 55.0,
                fats: 6.0,
                fiber: 8.0,
                sugar: 2.0,
                sodium: 700.0,
                potassium: 400.0,
                iron: 3.0,
                portion_size: "bowl",
                default_quantity: 1,
                description:
                    "Chole is a North Indian dish made of chickpeas cooked in a spicy gravy. It's often served with rice or bread.",
                instructions:
                    "Step 1: Soak chickpeas overnight and boil >> Step 2: In a pan, heat oil and add onions >> Step 3: Add tomatoes and spices to make gravy >> Step 4: Add boiled chickpeas and simmer.",
                ingredients:
                    "Chickpeas (1 cup), Onions (2, chopped), Tomatoes (2, chopped), Spices (cumin, coriander, garam masala), Oil (for cooking), Salt (to taste)",
            },
            {
                food_id: "food_032",
                food_name: "Pav Bhaji",
                calories: 400,
                protein: 10.0,
                carbs: 60.0,
                fats: 15.0,
                fiber: 5.0,
                sugar: 4.0,
                sodium: 800.0,
                potassium: 450.0,
                iron: 3.0,
                portion_size: "plate",
                default_quantity: 1,
                description:
                    "Pav Bhaji is a popular street food dish consisting of a spicy vegetable mash served with buttered bread rolls. It's a delightful and filling meal.",
                instructions:
                    "Step 1: Boil mixed vegetables until soft >> Step 2: Mash the vegetables and cook with spices >> Step 3: Toast pav (bread rolls) with butter >> Step 4: Serve bhaji with pav, garnished with onion and cilantro.",
                ingredients:
                    "Mixed Vegetables (2 cups, boiled), Pav (6 rolls), Butter (for toasting), Spices (cumin, coriander, red chili powder), Onions (for garnish), Cilantro (for garnish), Salt (to taste)",
            },
            {
                food_id: "food_033",
                food_name: "Masala Dosa",
                calories: 250,
                protein: 6.0,
                carbs: 40.0,
                fats: 10.0,
                fiber: 3.0,
                sugar: 1.0,
                sodium: 300.0,
                potassium: 200.0,
                iron: 1.0,
                portion_size: "piece",
                default_quantity: 1,
                description:
                    "Masala Dosa is a South Indian dish made of a crispy crepe filled with spiced potatoes. It's often served with chutney and sambar.",
                instructions:
                    "Step 1: Prepare dosa batter and soak potatoes >> Step 2: Cook potatoes with spices >> Step 3: Make dosa and fill with potato mixture >> Step 4: Serve hot.",
                ingredients:
                    "Dosa Batter (2 cups), Potatoes (2, boiled and mashed), Spices (cumin, turmeric), Chutney (for serving)",
            },
            {
                food_id: "food_034",
                food_name: "Aloo Tikki",
                calories: 200,
                protein: 4.0,
                carbs: 30.0,
                fats: 8.0,
                fiber: 3.0,
                sugar: 2.0,
                sodium: 300.0,
                potassium: 250.0,
                iron: 1.0,
                portion_size: "piece",
                default_quantity: 2,
                description:
                    "Aloo Tikki is a North Indian snack made from spiced potato patties, often served with chutney.",
                instructions:
                    "Step 1: Boil and mash potatoes >> Step 2: Mix with spices and shape into patties >> Step 3: Shallow fry until golden brown >> Step 4: Serve hot with chutney.",
                ingredients:
                    "Potatoes (2, boiled and mashed), Spices (cumin, coriander, garam masala), Oil (for frying), Salt (to taste)",
            },
            {
                food_id: "food_035",
                food_name: "Kachori",
                calories: 250,
                protein: 6.0,
                carbs: 30.0,
                fats: 12.0,
                fiber: 3.0,
                sugar: 1.0,
                sodium: 400.0,
                potassium: 200.0,
                iron: 1.0,
                portion_size: "piece",
                default_quantity: 2,
                description:
                    "Kachori is a spicy Indian snack made from a flaky pastry filled with a spiced lentil mixture. It's often served with chutney.",
                instructions:
                    "Step 1: Prepare dough with flour and water >> Step 2: Make filling with lentils and spices >> Step 3: Shape kachoris and deep fry until golden brown >> Step 4: Serve hot with chutney.",
                ingredients:
                    "Flour (2 cups), Lentils (1 cup, cooked), Spices (cumin, coriander, garam masala), Oil (for frying), Water (as needed), Salt (to taste)",
            },
            {
                food_id: "food_036",
                food_name: "Puri",
                calories: 200,
                protein: 4.0,
                carbs: 30.0,
                fats: 8.0,
                fiber: 1.0,
                sugar: 0.0,
                sodium: 300.0,
                potassium: 200.0,
                iron: 0.5,
                portion_size: "piece",
                default_quantity: 2,
                description:
                    "Puri is a deep-fried Indian bread made from unleavened flour. It's crispy and often served with curries.",
                instructions:
                    "Step 1: Prepare dough with flour and water >> Step 2: Roll out into small circles >> Step 3: Deep fry until puffed and golden brown >> Step 4: Serve hot with curry.",
                ingredients:
                    "Flour (2 cups), Water (as needed), Oil (for frying), Salt (to taste)",
            },
            {
                food_id: "food_037",
                food_name: "Biryani",
                calories: 400,
                protein: 20.0,
                carbs: 60.0,
                fats: 15.0,
                fiber: 3.0,
                sugar: 2.0,
                sodium: 600.0,
                potassium: 400.0,
                iron: 2.0,
                portion_size: "plate",
                default_quantity: 1,
                description:
                    "Biryani is a mixed rice dish originating from the Indian subcontinent, made with spices, rice, and meat or vegetables.",
                instructions:
                    "Step 1: Marinate meat or vegetables with spices >> Step 2: Cook rice separately >> Step 3: Layer rice and meat/vegetables in a pot >> Step 4: Cook on low heat until flavors meld.",
                ingredients:
                    "Basmati Rice (2 cups), Meat or Vegetables (500g), Spices (cumin, coriander, garam masala), Water (as needed), Salt (to taste)",
            },
            {
                food_id: "food_038",
                food_name: "Thali",
                calories: 600,
                protein: 25.0,
                carbs: 80.0,
                fats: 20.0,
                fiber: 10.0,
                sugar: 5.0,
                sodium: 800.0,
                potassium: 600.0,
                iron: 5.0,
                portion_size: "plate",
                default_quantity: 1,
                description:
                    "Thali is a traditional Indian meal consisting of various dishes served on a platter. It's a complete meal that offers a variety of flavors.",
                instructions:
                    "Step 1: Prepare different dishes like curry, rice, bread, and dessert >> Step 2: Serve on a large plate or thali >> Step 3: Enjoy the variety of flavors.",
                ingredients:
                    "Variety of dishes (curry, rice, bread, dessert), Spices (as needed), Salt (to taste)",
            },
            {
                food_id: "food_039",
                food_name: "Kadhi",
                calories: 300,
                protein: 10.0,
                carbs: 40.0,
                fats: 10.0,
                fiber: 5.0,
                sugar: 3.0,
                sodium: 400.0,
                potassium: 300.0,
                iron: 2.0,
                portion_size: "bowl",
                default_quantity: 1,
                description:
                    "Kadhi is a yogurt-based curry made with gram flour and spices. It's often served with rice.",
                instructions:
                    "Step 1: Mix yogurt with gram flour and spices >> Step 2: Cook until thickened >> Step 3: Serve hot with rice.",
                ingredients:
                    "Yogurt (1 cup), Gram Flour (1/2 cup), Spices (cumin, turmeric), Water (as needed), Salt (to taste)",
            },
            {
                food_id: "food_040",
                food_name: "Puri",
                calories: 200,
                protein: 4.0,
                carbs: 30.0,
                fats: 8.0,
                fiber: 1.0,
                sugar: 0.0,
                sodium: 300.0,
                potassium: 200.0,
                iron: 0.5,
                portion_size: "piece",
                default_quantity: 2,
                description:
                    "Puri is a deep-fried Indian bread made from unleavened flour. It's crispy and often served with curries.",
                instructions:
                    "Step 1: Prepare dough with flour and water >> Step 2: Roll out into small circles >> Step 3: Deep fry until puffed and golden brown >> Step 4: Serve hot with curry.",
                ingredients:
                    "Flour (2 cups), Water (as needed), Oil (for frying), Salt (to taste)",
            },
        ],
    });

    console.log("Seeding complete.");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
