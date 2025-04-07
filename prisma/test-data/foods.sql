DROP TABLE IF EXISTS public.foods CASCADE;

-- Create the foods table with additional fields for instructions and recipe
CREATE TABLE foods (
    food_id VARCHAR(255) PRIMARY KEY,
    food_name VARCHAR(100) NOT NULL,
    calories INT NOT NULL,
    protein DECIMAL(6,2),
    carbs DECIMAL(6,2),
    fats DECIMAL(6,2),
    fiber DECIMAL(6,2),
    sugar DECIMAL(6,2),
    sodium DECIMAL(6,2),
    potassium DECIMAL(6,2),
    iron DECIMAL(6,2),
    portion_size VARCHAR(50),
    default_quantity DECIMAL(5,2),
    description TEXT,
    instructions TEXT,
    ingredients TEXT
);

-- Insert sample data with detailed descriptions, instructions, and recipe
INSERT INTO public.foods (food_id, food_name, calories, protein, carbs, fats, fiber, sugar, sodium, potassium, iron, portion_size, default_quantity, description, instructions, ingredients)  
VALUES 
('food_001', 'Chicken Biryani', 292, 21.00, 34.00, 10.00, 2.00, 1.00, 520.00, 380.00, 1.20, 'plate', 1,
'Chicken Biryani is a classic Indian rice dish made with marinated chicken, layered basmati rice, and aromatic spices. Slow-cooked on dum, it’s flavorful, festive, and perfect for special occasions.',
'Step 1: Mix yogurt, ginger-garlic paste, turmeric, chili powder, garam masala, salt, and lemon juice in a bowl >> Step 2: Add chicken and marinate for 6–8 hours >> Step 3: Rinse and soak basmati rice for 30 minutes >> Step 4: Boil water with whole spices and salt >> Step 5: Cook rice until 70% done and drain >> Step 6: Fry sliced onions in ghee or oil until golden brown >> Step 7: Remove half of fried onions for garnish >> Step 8: Sear marinated chicken in the pot for 4–5 minutes >> Step 9: Soak saffron in warm milk >> Step 10: Layer half the rice over chicken and top with saffron milk, onions, mint, and cilantro >> Step 11: Repeat layering with remaining ingredients >> Step 12: Cover tightly and dum-cook on low heat for 25 minutes >> Step 13: Let rest for 10 minutes >> Step 14: Fluff gently and serve hot with raita or salad',
'Bone-in Chicken (1.2 kg), Basmati Rice (2 cups), Plain Yogurt (1 cup), Ginger-Garlic Paste (1 tbsp), Turmeric (1 tsp), Red Chili Powder (1 tsp), Garam Masala (1 tbsp), Salt (to taste), Lemon Juice (1/2 lemon), Ghee or Oil (4 tbsp), Onions (2 large, sliced), Mint Leaves (1/2 cup, chopped), Cilantro (1/2 cup, chopped), Saffron Strands (15), Warm Milk (1/4 cup), Bay Leaves (2), Green Cardamom Pods (4), Black Cardamom Pods (2), Cloves (4), Cinnamon Stick (1, 2-inch), Star Anise (1), Water (10 cups)'),

('food_002', 'Paneer Butter Masala', 400, 13.00, 23.00, 31.00, 2.50, 6.00, 870.00, 300.00, 2.50, 'cup', 1,
'Paneer Butter Masala is a rich and creamy curry that features soft cubes of paneer immersed in a velvety tomato and butter sauce. The gravy is delicately spiced with garam masala, fenugreek, and a touch of cream to balance the acidity of tomatoes. This indulgent dish is a favorite in North Indian cuisine and is best enjoyed with naan or steamed rice for a comforting meal.',
'Step 1: Cut 250g paneer into bite-sized cubes >> Step 2: Sauté paneer in 1 tbsp oil until golden on the edges >> Step 3: In the same pan, melt 2 tbsp butter and cook 1 chopped onion until soft >> Step 4: Add 1 tbsp ginger-garlic paste and cook for 2 minutes >> Step 5: Pour in 2 cups tomato puree and simmer for 8–10 minutes >> Step 6: Add 1 tsp chili powder, 1 tsp garam masala, 1/2 tsp turmeric, and salt to taste >> Step 7: Add 1/2 cup water and cook for 5 more minutes >> Step 8: Stir in 1 tbsp kasuri methi (crushed) >> Step 9: Mix in 1/4 cup heavy cream and combine gently >> Step 10: Add paneer cubes and simmer on low for 5 minutes >> Step 11: Finish with 1 tbsp butter and a pinch of sugar >> Step 12: Serve hot with naan or rice',
'Paneer (250g, cubed), Tomato Puree (2 cups), Onion (1, finely chopped), Ginger-Garlic Paste (1 tbsp), Butter (3 tbsp), Heavy Cream (1/4 cup), Oil (1 tbsp), Red Chili Powder (1 tsp), Garam Masala (1 tsp), Turmeric (1/2 tsp), Kasuri Methi (1 tbsp), Salt (to taste), Sugar (a pinch), Water (1/2 cup), Naan or Rice (for serving)'),

('food_003', 'Dal Tadka', 180, 9.00, 26.00, 7.00, 5.00, 2.00, 620.00, 400.00, 2.20, 'bowl', 1,
'Dal Tadka is a comforting lentil dish that combines slow-cooked lentils with a sizzling tempering of garlic, cumin, and red chili. The dish is enriched with fresh herbs and a squeeze of lemon, which brightens its robust flavor profile. Served hot with rice or flatbread, Dal Tadka is a staple in many Indian households, offering both nutrition and warmth.',
'Step 1: Rinse 1 cup red lentils and boil in 3 cups water with a pinch of turmeric and salt until soft >> Step 2: In a small pan, heat 1 tbsp ghee or oil and add 1 tsp cumin seeds >> Step 3: Add 4 crushed garlic cloves and 1 dried red chili, sauté until golden >> Step 4: Pour the tempering over the cooked dal and mix well >> Step 5: Simmer for 5 minutes on low heat >> Step 6: Garnish with chopped cilantro and a squeeze of lemon juice >> Step 7: Serve hot with steamed rice or roti',
'Red Lentils (1 cup), Water (3 cups), Turmeric (a pinch), Salt (to taste), Ghee or Oil (1 tbsp), Cumin Seeds (1 tsp), Garlic (4 cloves, crushed), Dried Red Chili (1), Fresh Cilantro (for garnish), Lemon Juice (to taste), Rice or Roti (for serving)'),

('food_004', 'Aloo Gobi', 150, 3.00, 22.00, 6.00, 4.00, 1.00, 500.00, 300.00, 1.80, 'bowl', 1,
'Aloo Gobi is a traditional dry curry that brings together tender potatoes and cauliflower with a medley of aromatic spices. The dish is simmered with turmeric, cumin, and coriander, imparting warm, earthy flavors that are both hearty and satisfying. It is a popular vegetarian option that pairs well with roti or rice, making it a versatile meal.',
'Step 1: Peel and cube 2 medium potatoes >> Step 2: Cut 2 cups cauliflower into small florets >> Step 3: Heat 2 tbsp oil in a pan and add 1 tsp cumin seeds >> Step 4: Add 1 chopped onion and sauté until golden >> Step 5: Stir in 1 tsp ginger-garlic paste and cook for 1 minute >> Step 6: Add potatoes and cauliflower, stir to coat >> Step 7: Sprinkle 1/2 tsp turmeric, 1 tsp ground coriander, 1/2 tsp chili powder, and salt to taste >> Step 8: Cover and cook on low for 15–20 minutes, stirring occasionally >> Step 9: Uncover and cook for 5 more minutes until edges crisp >> Step 10: Garnish with chopped cilantro and a squeeze of lemon >> Step 11: Serve hot with roti or rice',
'Potatoes (2 medium, cubed), Cauliflower (2 cups, florets), Onion (1, chopped), Ginger-Garlic Paste (1 tsp), Oil (2 tbsp), Cumin Seeds (1 tsp), Turmeric (1/2 tsp), Ground Coriander (1 tsp), Red Chili Powder (1/2 tsp), Salt (to taste), Fresh Cilantro (for garnish), Lemon Juice (optional), Roti or Rice (for serving)'),

('food_005', 'Butter Chicken', 355, 25.00, 12.00, 24.00, 2.00, 3.00, 1100.00, 600.00, 3.20, 'plate', 1,
'Butter Chicken is a beloved Indian dish featuring succulent pieces of chicken simmered in a smooth, creamy tomato sauce. Infused with spices such as garam masala, ginger, and garlic, the dish achieves a perfect balance of tangy and buttery flavors. Typically served with naan or rice, Butter Chicken offers a luxurious dining experience that is both comforting and indulgent.',
'Step 1: In a bowl, mix 1 cup yogurt, 1 tbsp ginger-garlic paste, 1 tsp red chili powder, 1 tsp garam masala, and salt to taste >> Step 2: Add 500g boneless chicken pieces and marinate for at least 4 hours >> Step 3: Grill or pan-sear chicken until cooked and slightly charred, set aside >> Step 4: In a large pan, melt 2 tbsp butter and sauté 1 chopped onion until soft >> Step 5: Add 1 tbsp ginger-garlic paste and cook for 2 minutes >> Step 6: Add 2 cups tomato puree, 1 tsp sugar, and 1/2 tsp turmeric >> Step 7: Cook on medium heat for 10–12 minutes until sauce thickens >> Step 8: Stir in 1/4 cup heavy cream and 1 tbsp crushed kasuri methi >> Step 9: Add cooked chicken to the sauce and simmer for 5–7 minutes >> Step 10: Finish with 1 tbsp butter and a dash of garam masala >> Step 11: Serve hot with naan or basmati rice',
'Chicken (500g, boneless), Yogurt (1 cup), Ginger-Garlic Paste (2 tbsp), Red Chili Powder (1 tsp), Garam Masala (1.5 tsp), Salt (to taste), Onion (1, chopped), Tomato Puree (2 cups), Butter (3 tbsp), Turmeric (1/2 tsp), Sugar (1 tsp), Heavy Cream (1/4 cup), Kasuri Methi (1 tbsp, crushed), Naan or Basmati Rice (for serving)'),

('food_006', 'Chole Bhature', 427, 11.00, 50.00, 18.00, 7.00, 6.00, 950.00, 580.00, 2.10, 'plate', 1,
'Chole Bhature is a popular North Indian dish known for its spicy chickpea curry served alongside deep-fried, fluffy bread. The chickpeas are simmered in a robust blend of spices, creating a hearty and flavorful curry that is both satisfying and rich in taste. This dish is often enjoyed as a breakfast or lunch special, celebrated for its bold flavors and comforting texture.',
'Step 1: Soak 1 cup dried chickpeas overnight in water >> Step 2: Pressure cook soaked chickpeas with salt and 1/2 tsp turmeric until soft >> Step 3: Heat 2 tbsp oil in a pan and sauté 1 chopped onion until golden >> Step 4: Add 1 tbsp ginger-garlic paste and cook for 2 minutes >> Step 5: Add 2 chopped tomatoes and cook until mushy >> Step 6: Stir in 1 tsp cumin, 1 tsp coriander powder, 1/2 tsp garam masala, 1/2 tsp chili powder, and salt to taste >> Step 7: Add cooked chickpeas with some of the cooking water, simmer for 10–15 minutes >> Step 8: Garnish with fresh cilantro and lemon juice >> Step 9: For bhature, knead 2 cups all-purpose flour with 1/2 cup yogurt, 1/2 tsp salt, and a pinch of baking soda into a soft dough >> Step 10: Rest the dough for 2–3 hours >> Step 11: Divide into balls, roll out, and deep fry in hot oil until puffed and golden >> Step 12: Serve hot bhature with chole, sliced onions, and lemon wedges',
'Chickpeas (1 cup, dried), Onion (1, chopped), Tomato (2, chopped), Ginger-Garlic Paste (1 tbsp), Oil (2 tbsp), Turmeric (1/2 tsp), Cumin (1 tsp), Coriander Powder (1 tsp), Garam Masala (1/2 tsp), Red Chili Powder (1/2 tsp), Salt (to taste), Fresh Cilantro (for garnish), Lemon Juice (to taste), All-Purpose Flour (2 cups), Yogurt (1/2 cup), Baking Soda (a pinch), Oil (for frying), Onion Slices (for serving), Lemon Wedges (for serving)'),

('food_007', 'Palak Paneer', 366, 14.00, 22.00, 22.00, 5.00, 3.00, 690.00, 360.00, 3.70, 'bowl', 1,
'Palak Paneer is a nutritious dish that pairs soft, homemade paneer cubes with a silky spinach gravy. The spinach is slowly cooked with garlic, ginger, and a hint of cream, resulting in a vibrant green curry that is both wholesome and indulgent. This dish is a favorite among vegetarians and is best served with steamed rice or warm naan.',
'Step 1: Rinse and blanch 4 cups spinach leaves in boiling water for 2 minutes >> Step 2: Transfer spinach to ice water, then drain and blend into a smooth puree >> Step 3: Heat 2 tbsp oil or ghee in a pan and sauté 1 chopped onion until soft >> Step 4: Add 1 tbsp ginger-garlic paste and cook for 1–2 minutes >> Step 5: Stir in 1 chopped green chili and cook briefly >> Step 6: Add the spinach puree and cook on low for 5–7 minutes >> Step 7: Add 1/2 tsp garam masala, 1/2 tsp cumin powder, and salt to taste >> Step 8: Stir in 1/4 cup cream and mix well >> Step 9: Add 250g paneer cubes and simmer gently for 5 minutes >> Step 10: Finish with a squeeze of lemon juice and optional drizzle of cream >> Step 11: Serve hot with naan or basmati rice',
'Spinach (4 cups, fresh), Paneer (250g, cubed), Onion (1, chopped), Ginger-Garlic Paste (1 tbsp), Green Chili (1, chopped), Cream (1/4 cup), Oil or Ghee (2 tbsp), Garam Masala (1/2 tsp), Cumin Powder (1/2 tsp), Salt (to taste), Lemon Juice (to taste), Naan or Basmati Rice (for serving)'),

('food_008', 'Pani Puri', 152, 3.00, 26.00, 5.00, 3.00, 5.00, 310.00, 240.00, 1.10, 'puri', 1,
'Pani Puri is a delightful street food snack consisting of crisp, hollow puris filled with a tangy, spicy water mixture. Each bite bursts with a mix of sweet, sour, and spicy flavors, enhanced by mashed potatoes and chickpeas. This interactive and refreshing snack is a beloved treat, especially during warm weather and festive gatherings.',
'Step 1: Boil and mash 2 medium potatoes >> Step 2: Mix potatoes with 1/2 cup cooked chickpeas, 1/2 tsp chaat masala, 1/4 tsp chili powder, and salt to taste >> Step 3: Blend 1/2 cup mint leaves, 1/4 cup coriander leaves, 1 green chili, and 1-inch ginger with 2 cups cold water >> Step 4: Add 2 tbsp tamarind pulp, 1 tsp roasted cumin powder, 1/2 tsp black salt, and adjust seasoning >> Step 5: Chill the pani (spiced water) for at least 30 minutes >> Step 6: Lightly crack the tops of the puris >> Step 7: Fill each puri with a spoonful of potato mixture >> Step 8: Pour in chilled pani just before serving >> Step 9: Serve immediately and enjoy the burst of flavor',
'Puris (store-bought or homemade), Potatoes (2, boiled and mashed), Chickpeas (1/2 cup, cooked), Chaat Masala (1/2 tsp), Red Chili Powder (1/4 tsp), Salt (to taste), Mint Leaves (1/2 cup), Coriander Leaves (1/4 cup), Green Chili (1), Ginger (1-inch piece), Tamarind Pulp (2 tbsp), Roasted Cumin Powder (1 tsp), Black Salt (1/2 tsp), Cold Water (2 cups)'),

('food_009', 'Dosa', 168, 3.00, 30.00, 4.00, 4.00, 2.00, 620.00, 240.00, 1.40, 'piece', 1,
'Dosa is a thin, crispy crepe made from fermented rice and lentil batter, popular throughout South India. Its delicate texture and subtle tang make it a versatile dish that can be enjoyed with a variety of chutneys and sambar. Dosa is not only delicious but also light and easy on the stomach, making it a perfect choice for any meal of the day.',
'Step 1: Rinse 1 cup rice and 1/3 cup urad dal, then soak separately for 4–6 hours >> Step 2: Blend rice and dal together with a little water into a smooth batter >> Step 3: Add salt and let the batter ferment overnight in a warm place >> Step 4: Heat a flat non-stick tawa or cast iron griddle on medium-high heat >> Step 5: Pour a ladle of batter in the center and spread it thinly in a circular motion >> Step 6: Drizzle a few drops of oil around the edges >> Step 7: Cook until the bottom turns golden and edges lift easily >> Step 8: Fold and remove from pan, no need to flip >> Step 9: Serve hot with coconut chutney and sambar',
'Rice (1 cup), Urad Dal (1/3 cup), Water (as needed), Salt (to taste), Oil (for cooking), Coconut Chutney (for serving), Sambar (for serving)'),

('food_010', 'Samosa', 261, 4.00, 28.00, 14.00, 3.00, 2.00, 480.00, 190.00, 0.90, 'piece', 1,
'Samosa is a savory pastry that is deep-fried to golden perfection, filled with a spiced mixture of potatoes, peas, and sometimes meat. The crisp, flaky exterior contrasts beautifully with the soft, flavorful interior, making it a popular snack at parties and on street corners alike. This dish offers a satisfying crunch and a burst of spice with every bite.',
'Step 1: Boil 2 medium potatoes, peel and mash >> Step 2: Heat 1 tbsp oil in a pan, add 1/2 tsp cumin seeds, then sauté 1/2 cup peas and mashed potatoes >> Step 3: Stir in 1 tsp garam masala, 1/2 tsp chili powder, 1/2 tsp amchur, and salt to taste >> Step 4: Mix well and let the filling cool >> Step 5: For dough, mix 1.5 cups all-purpose flour, 1/4 tsp salt, and 2 tbsp oil >> Step 6: Add water gradually and knead into a stiff dough >> Step 7: Rest dough for 30 minutes covered >> Step 8: Divide dough into small balls and roll into 6-inch ovals >> Step 9: Cut each oval in half, shape into cones, and fill with potato mixture >> Step 10: Seal edges with water and press tightly >> Step 11: Heat oil in a deep pan on medium-low heat >> Step 12: Fry samosas in batches until golden brown and crispy >> Step 13: Drain excess oil and serve hot with tamarind or mint chutney',
'Potatoes (2 medium, boiled and mashed), Green Peas (1/2 cup), Cumin Seeds (1/2 tsp), Garam Masala (1 tsp), Red Chili Powder (1/2 tsp), Amchur/Dry Mango Powder (1/2 tsp), Salt (to taste), Oil (for cooking and frying), All-Purpose Flour (1.5 cups), Water (as needed), Mint or Tamarind Chutney (for serving)'),

('food_011', 'Rogan Josh', 223, 22.00, 7.00, 14.00, 1.00, 3.00, 720.00, 480.00, 3.80, 'plate', 1,
'Rogan Josh is a richly spiced curry hailing from Kashmir, known for its deep red hue and aromatic flavor profile. Tender pieces of lamb or goat are slow-cooked in a sauce of tomatoes, yogurt, and a complex mix of spices, resulting in a dish that is both hearty and deeply satisfying. Rogan Josh is often enjoyed with rice or naan, making it a comforting meal for cooler days.',
'Step 1: Heat 2 tbsp ghee or oil in a heavy-bottomed pot >> Step 2: Add 500g lamb or goat pieces and brown on all sides >> Step 3: Remove meat and set aside >> Step 4: In the same pot, sauté 1 chopped onion until golden >> Step 5: Add 1 tbsp ginger-garlic paste and cook for 2 minutes >> Step 6: Stir in 1/2 tsp turmeric, 1 tsp Kashmiri red chili powder, 1 tsp cumin, and 1 tsp coriander powder >> Step 7: Add 2 chopped tomatoes and cook until soft >> Step 8: Reduce heat and stir in 1/2 cup plain yogurt slowly, mixing continuously >> Step 9: Return browned meat to the pot and coat with the masala >> Step 10: Add 1 cup water and bring to a boil >> Step 11: Cover and simmer on low heat for 45–60 minutes until meat is tender >> Step 12: Stir in 1/2 tsp garam masala and 1 tbsp crushed fennel seeds >> Step 13: Garnish with fresh cilantro >> Step 14: Serve hot with steamed basmati rice or naan',
'Lamb or Goat (500g, bone-in preferred), Onion (1, chopped), Ginger-Garlic Paste (1 tbsp), Tomato (2, chopped), Yogurt (1/2 cup, plain), Ghee or Oil (2 tbsp), Kashmiri Red Chili Powder (1 tsp), Turmeric (1/2 tsp), Cumin Powder (1 tsp), Coriander Powder (1 tsp), Garam Masala (1/2 tsp), Fennel Seeds (1 tbsp, crushed), Salt (to taste), Water (1 cup), Fresh Cilantro (for garnish), Basmati Rice or Naan (for serving)'),

('food_012', 'Tandoori Chicken', 263, 30.00, 0.00, 12.00, 0.00, 0.00, 540.00, 500.00, 2.30, 'piece', 1,
'Tandoori Chicken is a timeless dish where chicken is marinated in a blend of yogurt and spices before being grilled in a tandoor oven. The intense heat of the tandoor creates a smoky flavor and a beautifully charred exterior, while keeping the meat tender and juicy. This dish is a perfect example of traditional Indian grilling techniques that deliver both flavor and visual appeal.',
'Step 1: In a bowl, mix 1 cup yogurt, 1 tbsp ginger-garlic paste, 1 tsp red chili powder, 1 tsp garam masala, 1/2 tsp turmeric, 1/2 tsp cumin powder, salt to taste, and juice of 1/2 lemon >> Step 2: Make shallow cuts on 500g chicken pieces and coat thoroughly with the marinade >> Step 3: Cover and refrigerate for at least 6 hours or overnight >> Step 4: Preheat a tandoor, grill, or oven to 220°C (425°F) >> Step 5: Place chicken on a wire rack or skewers and grill for 20–25 minutes, turning once halfway >> Step 6: Baste occasionally with melted butter or oil during grilling >> Step 7: Ensure chicken is cooked through and slightly charred at the edges >> Step 8: Serve hot with lemon wedges, sliced onions, and mint chutney',
'Chicken (500g, bone-in or boneless), Yogurt (1 cup), Ginger-Garlic Paste (1 tbsp), Red Chili Powder (1 tsp), Garam Masala (1 tsp), Turmeric (1/2 tsp), Cumin Powder (1/2 tsp), Salt (to taste), Lemon Juice (1/2 lemon), Butter or Oil (for basting), Lemon Wedges (for serving), Onion Slices (for garnish), Mint Chutney (optional)'),

('food_013', 'Kadhi Pakora', 125, 7.00, 12.00, 6.00, 2.00, 3.00, 650.00, 280.00, 1.70, 'bowl', 1,
'Kadhi Pakora is a comforting curry that features soft fritters (pakoras) immersed in a tangy, spiced yogurt-based gravy. The sauce is enriched with turmeric, cumin, and mustard seeds, creating a perfect balance of sour and savory flavors. This dish is a beloved home-cooked meal, offering warmth and satisfaction in every spoonful.',
'Step 1: In a bowl, mix 1 cup besan (gram flour), 1/2 tsp salt, 1/2 tsp chili powder, and water to form a thick batter >> Step 2: Add 1/2 cup chopped onions or spinach to the batter >> Step 3: Heat oil in a deep pan and drop spoonfuls of batter, frying until golden brown >> Step 4: Remove and drain pakoras on paper towels >> Step 5: In another bowl, whisk 1 cup yogurt with 1/4 cup besan, 1/2 tsp turmeric, and 3 cups water >> Step 6: Heat 1 tbsp oil in a deep pot, add 1/2 tsp cumin seeds, 1/2 tsp mustard seeds, and 1/4 tsp fenugreek seeds >> Step 7: Add a pinch of asafoetida and 1 dried red chili, sauté briefly >> Step 8: Pour in the yogurt mixture, bring to a gentle boil while stirring continuously >> Step 9: Simmer on low for 20–25 minutes, stirring occasionally >> Step 10: Add fried pakoras and simmer for another 5–7 minutes >> Step 11: Garnish with fresh coriander leaves and serve hot with steamed rice',
'Besan (Gram Flour, 1 1/4 cups total), Yogurt (1 cup, whisked), Onions or Spinach (1/2 cup, chopped), Water (3+ cups), Turmeric (1/2 tsp), Red Chili Powder (1/2 tsp), Salt (to taste), Cumin Seeds (1/2 tsp), Mustard Seeds (1/2 tsp), Fenugreek Seeds (1/4 tsp), Dried Red Chili (1), Asafoetida (a pinch), Fresh Coriander (for garnish), Oil (for frying), Steamed Rice (for serving)'),

('food_014', 'Bhel Puri', 188, 3.00, 40.00, 5.00, 3.00, 6.00, 340.00, 140.00, 1.00, 'plate', 1,
'Bhel Puri is a refreshing and light snack that combines puffed rice with crisp vegetables, tangy chutneys, and a sprinkle of spices. Its medley of textures and flavors—crunchy, tangy, and mildly spicy—make it a delightful treat for any time of day. Often enjoyed as a street food, Bhel Puri is both satisfying and invigorating.',
'Step 1: In a large mixing bowl, add 2 cups puffed rice >> Step 2: Add 1/2 cup finely chopped onions, 1/2 cup chopped tomatoes (seeds removed), and 1/4 cup boiled and diced potatoes >> Step 3: Add 2 tbsp finely chopped cilantro and 1 chopped green chili (optional) >> Step 4: Mix in 2 tbsp tamarind chutney and 1 tbsp green chutney >> Step 5: Sprinkle 1/2 tsp chaat masala, 1/4 tsp red chili powder, and salt to taste >> Step 6: Toss everything quickly and gently to coat evenly >> Step 7: Top with a handful of sev and crushed papdi (flat puris) >> Step 8: Serve immediately to retain crispiness',
'Puffed Rice (2 cups), Onion (1/2 cup, finely chopped), Tomato (1/2 cup, deseeded and chopped), Boiled Potato (1/4 cup, diced), Green Chili (1, chopped, optional), Cilantro (2 tbsp, chopped), Tamarind Chutney (2 tbsp), Green Chutney (1 tbsp), Chaat Masala (1/2 tsp), Red Chili Powder (1/4 tsp), Salt (to taste), Sev (for topping), Papdi/Flat Puris (crushed, for topping)'),

('food_015', 'Pulao', 261, 6.00, 36.00, 9.00, 3.00, 2.00, 580.00, 390.00, 1.90, 'bowl', 1,
'Pulao is a fragrant rice dish cooked with a blend of aromatic spices and fresh vegetables. Each grain of rice is infused with subtle hints of cumin, cloves, and cardamom, resulting in a light yet flavorful meal. This versatile dish pairs wonderfully with a variety of curries and is a comforting addition to any meal.',
'Step 1: Rinse 1 cup basmati rice under cold water until clear, then soak for 20 minutes >> Step 2: In a large pot, heat 2 tbsp oil or ghee over medium heat >> Step 3: Add 1 tsp cumin seeds, 2 cloves, 2 green cardamom pods, and 1 small cinnamon stick, sauté for 30 seconds >> Step 4: Add 1 sliced onion and sauté until golden >> Step 5: Add 1/2 cup mixed vegetables (like peas, carrots, and beans) and sauté for 3–4 minutes >> Step 6: Drain soaked rice and add to the pot, stirring gently to coat >> Step 7: Pour in 2 cups water and add salt to taste >> Step 8: Bring to a boil, then reduce heat to low, cover, and cook for 15 minutes >> Step 9: Turn off heat and let sit covered for 5 minutes >> Step 10: Fluff gently with a fork and serve hot with curry or raita',
'Basmati Rice (1 cup), Water (2 cups), Mixed Vegetables (1/2 cup – peas, carrots, beans), Onion (1, sliced), Oil or Ghee (2 tbsp), Cumin Seeds (1 tsp), Cloves (2), Green Cardamom Pods (2), Cinnamon Stick (1 small), Salt (to taste)'),

('food_016', 'Methi Thepla', 120, 3.00, 18.00, 4.00, 2.00, 1.00, 400.00, 300.00, 1.40, 'piece', 1,
'Methi Thepla is a savory flatbread made with whole wheat flour and fresh fenugreek leaves, offering a unique and earthy flavor. The dough is spiced with turmeric, cumin, and coriander, then rolled thin and cooked on a griddle until crisp. This versatile bread is perfect as a snack or as a side to accompany a hearty meal.',
'Step 1: In a large bowl, mix 1 cup whole wheat flour, 1/2 cup chopped fresh fenugreek leaves, 1/2 tsp turmeric, 1/2 tsp cumin seeds, 1/2 tsp coriander powder, and salt to taste >> Step 2: Add 1 tbsp yogurt and mix well >> Step 3: Gradually add water and knead into a soft, pliable dough >> Step 4: Rest the dough for 15–20 minutes >> Step 5: Divide into small balls and roll out each into a thin disc >> Step 6: Heat a tawa or skillet over medium heat >> Step 7: Cook the thepla on both sides, brushing lightly with oil, until golden brown spots appear >> Step 8: Remove and serve hot with yogurt or pickle',
'Whole Wheat Flour (1 cup), Fresh Fenugreek Leaves (1/2 cup, chopped), Turmeric (1/2 tsp), Cumin Seeds (1/2 tsp), Coriander Powder (1/2 tsp), Salt (to taste), Yogurt (1 tbsp), Water (as needed), Oil (for cooking), Yogurt or Pickle (for serving)'),

('food_017', 'Lassi', 234, 8.00, 25.00, 7.00, 0.00, 22.00, 150.00, 350.00, 1.20, 'glass', 1,
'Lassi is a traditional yogurt-based drink that is both refreshing and versatile. Blended until smooth, it can be served sweet with a hint of rose water or savory with a pinch of salt and cumin. This cooling beverage is ideal for balancing spicy meals and provides a soothing finish to any dining experience.',
'Step 1: In a blender, combine 1 cup plain yogurt and 1/2 cup cold water >> Step 2: For sweet lassi, add 1–2 tbsp sugar and 1/2 tsp rose water >> Step 3: For savory lassi, add 1/4 tsp salt and 1/4 tsp roasted cumin powder instead >> Step 4: Blend until smooth and frothy >> Step 5: Pour into glasses and chill for 30 minutes >> Step 6: Serve cold, optionally garnished with mint or a sprinkle of cumin',
'Yogurt (1 cup), Cold Water (1/2 cup), Sugar (1–2 tbsp, for sweet), Rose Water (1/2 tsp, for sweet), Salt (1/4 tsp, for savory), Roasted Cumin Powder (1/4 tsp, for savory), Mint Leaves (for garnish, optional)'),

('food_018', 'Gulab Jamun', 312, 5.00, 40.00, 14.00, 1.00, 29.00, 350.00, 160.00, 1.40, 'piece', 1,
'Gulab Jamun is an indulgent dessert consisting of deep-fried milk-solid dumplings soaked in a fragrant sugar syrup. Each soft and spongy piece is infused with the delicate flavors of cardamom and rose water, creating a melt-in-your-mouth experience. Served warm or at room temperature, this dessert is a delightful way to end a meal.',
'Step 1: In a bowl, combine 1 cup milk powder, 1/4 cup all-purpose flour, and 1/4 tsp baking soda >> Step 2: Add 2 tbsp ghee and mix until crumbly >> Step 3: Gradually add 1/4 cup warm milk to form a soft, smooth dough >> Step 4: Rest the dough for 10 minutes >> Step 5: Meanwhile, prepare syrup by boiling 1 cup sugar with 1 cup water >> Step 6: Add 3–4 crushed cardamom pods and 1 tsp rose water to the syrup, simmer for 10 minutes >> Step 7: Form the dough into small smooth balls without cracks >> Step 8: Heat oil or ghee on low-medium and fry the balls until golden brown >> Step 9: Remove and immediately immerse in warm sugar syrup >> Step 10: Let them soak for at least 30 minutes before serving warm or at room temperature',
'Milk Powder (1 cup), All-Purpose Flour (1/4 cup), Baking Soda (1/4 tsp), Ghee (2 tbsp + for frying), Warm Milk (1/4 cup), Sugar (1 cup), Water (1 cup), Cardamom Pods (3–4, crushed), Rose Water (1 tsp), Oil or Ghee (for frying)'),

('food_019', 'Malai Kofta', 362, 12.00, 24.00, 25.00, 3.00, 7.00, 880.00, 430.00, 3.50, 'bowl', 1,
'Malai Kofta is a luxurious dish featuring soft, spiced vegetable dumplings served in a creamy, rich gravy. The koftas are made from mashed vegetables and paneer, then gently simmered in a sauce enriched with cream, tomatoes, and an array of spices. This dish is a favorite in Indian cuisine, offering a satisfying blend of textures and flavors that appeal to vegetarians and meat-eaters alike.',
'Step 1: Boil and mash 1 cup mixed vegetables (potato, carrot, peas) >> Step 2: Mix in 1/2 cup grated paneer, 2 tbsp cornflour, salt, 1/2 tsp garam masala, and 1/2 tsp chili powder >> Step 3: Shape into small balls and deep fry until golden brown, set aside >> Step 4: Heat 1 tbsp butter and sauté 1 chopped onion until translucent >> Step 5: Add 1 tbsp ginger-garlic paste and cook for 2 minutes >> Step 6: Stir in 1 cup tomato puree, 1/2 tsp turmeric, 1 tsp coriander powder, and salt to taste >> Step 7: Cook until oil separates, then stir in 1/2 cup heavy cream and 1/2 tsp sugar >> Step 8: Add 1/2 tsp garam masala and simmer for 5 minutes >> Step 9: Gently place koftas into the gravy just before serving >> Step 10: Garnish with chopped cilantro and serve hot with naan or rice',
'Potatoes (1/2 cup, boiled and mashed), Carrots (1/4 cup, boiled and mashed), Green Peas (1/4 cup, boiled and mashed), Paneer (1/2 cup, grated), Cornflour (2 tbsp), Salt (to taste), Garam Masala (1 tsp), Red Chili Powder (1/2 tsp), Onion (1, chopped), Ginger-Garlic Paste (1 tbsp), Tomato Puree (1 cup), Turmeric (1/2 tsp), Coriander Powder (1 tsp), Sugar (1/2 tsp), Cream (1/2 cup), Butter (1 tbsp), Fresh Cilantro (for garnish), Naan or Rice (for serving), Oil (for deep frying)'),

('food_020', 'Bhindi Masala', 102, 2.00, 14.00, 5.00, 4.00, 2.00, 380.00, 310.00, 1.50, 'bowl', 1,
'Bhindi Masala is a savory stir-fry that showcases tender okra cooked with onions, tomatoes, and a variety of spices. The dish highlights the natural flavor of okra while adding a tangy and mildly spicy kick through its blend of herbs and seasonings. This healthy and delicious option is a wonderful addition to any meal, providing both texture and taste.',
'Step 1: Rinse 250g okra, pat dry completely, and slice into 1/2 inch rounds >> Step 2: Heat 2 tbsp oil in a non-stick pan and sauté okra on medium heat until no longer slimy >> Step 3: In another pan, heat 1 tbsp oil and add 1 tsp cumin seeds >> Step 4: Add 1 chopped onion and sauté until golden >> Step 5: Stir in 1 tbsp ginger-garlic paste and cook for 1 minute >> Step 6: Add 1 chopped tomato and cook until soft >> Step 7: Add 1/2 tsp turmeric, 1 tsp coriander powder, 1/2 tsp chili powder, and salt to taste >> Step 8: Mix in sautéed okra and stir to coat well >> Step 9: Cook covered on low heat for 5–7 minutes until flavors meld >> Step 10: Garnish with chopped cilantro and a squeeze of lemon juice >> Step 11: Serve hot with roti or paratha',
'Okra (250g, sliced), Onion (1, chopped), Tomato (1, chopped), Ginger-Garlic Paste (1 tbsp), Cumin Seeds (1 tsp), Turmeric (1/2 tsp), Coriander Powder (1 tsp), Red Chili Powder (1/2 tsp), Salt (to taste), Oil (3 tbsp total), Fresh Cilantro (for garnish), Lemon Juice (optional), Roti or Paratha (for serving)'),

('food_021', 'Korma', 320, 16.00, 18.00, 22.00, 2.00, 3.00, 780.00, 310.00, 2.60, 'bowl', 1,
'Korma is a creamy, spiced curry made with meat or vegetables simmered in a yogurt-based sauce. Often flavored with nuts and aromatic spices, it is a rich and luxurious dish served with naan or rice.',
'Step 1: In a bowl, mix 1 cup yogurt, 1 tbsp ginger-garlic paste, 1/2 tsp turmeric, 1 tsp garam masala, and salt to taste >> Step 2: Add 500g meat or chopped vegetables and marinate for 1 hour >> Step 3: Heat 2 tbsp ghee in a heavy-bottomed pot and sauté 1 chopped onion until golden >> Step 4: Add 1 tbsp ginger-garlic paste and cook for 2 minutes >> Step 5: Add 1/2 cup tomato puree and cook until oil separates >> Step 6: Blend 1/4 cup soaked cashews with 1/4 cup water to make a paste, add to the pot >> Step 7: Add marinated meat or vegetables and cook on medium heat for 10 minutes >> Step 8: Add 1/2 cup water or stock and simmer covered for 15–20 minutes (until tender) >> Step 9: Stir in 1/4 cup cream and simmer for 5 more minutes >> Step 10: Garnish with chopped cilantro and serve hot with naan or rice',
'Meat or Vegetables (500g), Yogurt (1 cup), Ginger-Garlic Paste (2 tbsp), Onion (1, chopped), Tomato Puree (1/2 cup), Cashews (1/4 cup, soaked), Water or Stock (1/2 cup), Cream (1/4 cup), Turmeric (1/2 tsp), Garam Masala (1 tsp), Salt (to taste), Ghee (2 tbsp), Fresh Cilantro (for garnish), Naan or Rice (for serving)'),

('food_022', 'Veg Hakka Noodles', 225, 5.00, 30.00, 9.00, 2.00, 3.00, 540.00, 260.00, 1.60, 'plate', 1,
'Veg Hakka Noodles are a popular Indo-Chinese street food made by stir-frying noodles with vegetables, soy sauce, and chili for a spicy, savory flavor. It’s a quick and tasty dish loved across India.',
'Step 1: Boil 150g hakka noodles in salted water until al dente, then drain and toss with 1 tsp oil to prevent sticking >> Step 2: Heat 2 tbsp oil in a wok on high heat >> Step 3: Add 1 tbsp chopped garlic and sauté for 30 seconds >> Step 4: Add 1/2 cup sliced onions and sauté until slightly translucent >> Step 5: Add 1/2 cup shredded cabbage, 1/2 cup julienned carrots, and 1/2 cup thinly sliced bell peppers >> Step 6: Stir-fry the vegetables for 2–3 minutes until slightly tender but still crisp >> Step 7: Add the cooked noodles to the wok >> Step 8: Pour in 1 tbsp soy sauce, 1 tbsp chili sauce, 1 tsp vinegar, and salt to taste >> Step 9: Toss everything well on high heat for 2–3 minutes >> Step 10: Garnish with chopped spring onions and serve hot immediately',
'Hakka Noodles (150g), Garlic (1 tbsp, chopped), Onion (1/2 cup, sliced), Cabbage (1/2 cup, shredded), Carrot (1/2 cup, julienned), Bell Peppers (1/2 cup, thinly sliced), Soy Sauce (1 tbsp), Chili Sauce (1 tbsp), Vinegar (1 tsp), Salt (to taste), Oil (2 tbsp), Spring Onions (for garnish)'),

('food_023', 'Rajma', 210, 9.00, 27.00, 6.00, 5.00, 2.00, 540.00, 390.00, 2.80, 'bowl', 1,
'Rajma is a comforting North Indian dish made of red kidney beans simmered in a thick tomato and onion gravy. Served hot with rice, it’s a staple for many and offers rich flavor and nutrition.',
'Step 1: Rinse and soak 1 cup dried kidney beans overnight in water >> Step 2: Pressure cook the soaked beans with salt and 1/4 tsp turmeric for 5–6 whistles or until soft >> Step 3: In a large pan, heat 2 tbsp oil or ghee and sauté 1 chopped onion until golden >> Step 4: Add 1 tbsp ginger-garlic paste and cook for 2 minutes >> Step 5: Stir in 2 chopped tomatoes and cook until soft and pulpy >> Step 6: Add 1 tsp cumin, 1/2 tsp turmeric, 1 tsp coriander powder, 1 tsp garam masala, and 1/2 tsp chili powder >> Step 7: Cook the masala until oil begins to separate >> Step 8: Add cooked kidney beans along with some of the cooking liquid and mix well >> Step 9: Simmer on low heat for 15–20 minutes to let flavors meld >> Step 10: Mash a few beans to thicken the gravy if desired >> Step 11: Garnish with fresh cilantro and serve hot with steamed basmati rice',
'Kidney Beans (1 cup, dried), Onion (1, chopped), Tomato (2, chopped), Ginger-Garlic Paste (1 tbsp), Cumin Seeds (1 tsp), Turmeric (1/2 tsp), Coriander Powder (1 tsp), Garam Masala (1 tsp), Red Chili Powder (1/2 tsp), Salt (to taste), Water (for soaking and cooking), Oil or Ghee (2 tbsp), Fresh Cilantro (for garnish), Basmati Rice (for serving)'),

('food_024', 'Kathi Roll', 310, 12.00, 32.00, 14.00, 3.00, 2.00, 480.00, 240.00, 1.90, 'roll', 1,
'Kathi Roll is a street-food favorite made by wrapping spiced fillings like chicken, paneer, or vegetables inside a paratha. It’s flavorful, portable, and perfect for a quick meal.',
'Step 1: Heat 1 tbsp oil in a pan and sauté 1 chopped onion until soft >> Step 2: Add 250g sliced chicken or paneer, 1/2 tsp turmeric, 1/2 tsp chili powder, 1/2 tsp cumin, and salt >> Step 3: Cook until chicken is done or paneer is lightly browned >> Step 4: In a bowl, mix 2 tbsp yogurt with 1 tsp chaat masala and a pinch of salt >> Step 5: Warm or cook 2 parathas on a hot tawa until golden on both sides >> Step 6: Spread a spoonful of green chutney and yogurt mix on each paratha >> Step 7: Layer the filling down the center and top with sliced onions >> Step 8: Roll tightly and wrap in foil or paper >> Step 9: Serve hot with extra chutney or ketchup on the side',
'Chicken or Paneer (250g, sliced), Onion (1, chopped + extra for topping), Oil (1 tbsp), Turmeric (1/2 tsp), Red Chili Powder (1/2 tsp), Cumin (1/2 tsp), Salt (to taste), Yogurt (2 tbsp), Chaat Masala (1 tsp), Green Chutney (for spreading), Paratha (2 pieces), Foil or Butter Paper (for wrapping)'),

('food_025', 'Vada Pav', 295, 4.00, 31.00, 15.00, 2.00, 3.00, 420.00, 210.00, 1.40, 'piece', 1,
'Vada Pav is Mumbai’s famous street snack consisting of a spicy potato fritter (vada) sandwiched in a bun (pav) with chutneys and fried chilies.',
'Step 1: Boil 2 medium potatoes, peel and mash >> Step 2: In a pan, heat 1 tbsp oil and sauté 1/2 tsp mustard seeds, 1/2 tsp cumin seeds, and a pinch of hing >> Step 3: Add 1 chopped green chili and 1/2 inch grated ginger, cook for 1 minute >> Step 4: Add 1/4 tsp turmeric, salt to taste, and mashed potatoes >> Step 5: Mix well and let cool, then shape into small balls >> Step 6: In a bowl, mix 3/4 cup besan, 1/4 tsp chili powder, 1/4 tsp turmeric, a pinch of baking soda, and water to form a thick batter >> Step 7: Heat oil in a deep pan >> Step 8: Dip potato balls in batter and deep fry until golden >> Step 9: Slice pav buns, spread green and tamarind chutneys >> Step 10: Place vada inside and press gently >> Step 11: Serve hot with fried green chilies on the side',
'Potatoes (2 medium, boiled and mashed), Green Chili (1, chopped), Ginger (1/2 inch, grated), Mustard Seeds (1/2 tsp), Cumin Seeds (1/2 tsp), Hing (a pinch), Turmeric (1/4 tsp), Salt (to taste), Besan (3/4 cup), Baking Soda (a pinch), Red Chili Powder (1/4 tsp), Water (as needed), Oil (for frying), Pav Buns (4), Green Chutney (for spreading), Tamarind Chutney (for spreading), Fried Green Chilies (for serving)'),

('food_026', 'Idli', 58, 2.00, 12.00, 0.40, 0.60, 0.20, 120.00, 90.00, 0.30, 'piece', 1,
'Idli is a steamed South Indian breakfast staple made from a fermented rice and urad dal batter. It is light, fluffy, and served with sambar and chutneys.',
'Step 1: Prepare fermented batter, Step 2: Pour into molds, Step 3: Steam until fluffy, Step 4: Serve with sambar and chutney',
'Rice, Urad Dal, Water, Chutney, Sambar'),

('food_027', 'Momos', 47, 2.00, 6.00, 2.00, 0.40, 0.50, 150.00, 100.00, 0.60, 'piece', 1,
'Momos are steamed or fried dumplings filled with minced meat or vegetables, served with spicy red chutney. A popular snack in North East India.',
'Step 1: Prepare dough and filling, Step 2: Shape into dumplings, Step 3: Steam or fry, Step 4: Serve with chutney',
'Flour, Vegetables/Meat, Spices, Chutney'),

('food_028', 'Poha', 206, 4.00, 32.00, 5.00, 3.00, 2.00, 320.00, 180.00, 0.90, 'plate', 1,
'Poha is a light and fluffy flattened rice dish seasoned with turmeric, mustard seeds, green chilies, and onions. It is a staple breakfast in many Indian states.',
'Step 1: Rinse flattened rice, Step 2: Sauté spices and vegetables, Step 3: Add poha and steam, Step 4: Garnish with lemon and coriander',
'Flattened Rice, Onion, Mustard Seeds, Green Chilies, Turmeric, Lemon'),

('food_029', 'Sev Puri', 165, 3.00, 24.00, 6.00, 2.00, 5.00, 280.00, 90.00, 0.80, 'plate', 1,
'Sev Puri is a popular chaat dish made with crispy puris topped with mashed potatoes, chutneys, onions, and crunchy sev. It’s tangy, spicy, and sweet all in one bite.',
'Step 1: Lay out puris, Step 2: Add potatoes and chutneys, Step 3: Top with onions and sev, Step 4: Serve immediately',
'Puris, Potatoes, Chutneys, Onion, Sev, Spices'),

('food_030', 'Kheer', 215, 5.00, 28.00, 9.00, 0.50, 18.00, 180.00, 160.00, 0.70, 'bowl', 1,
'Kheer is a creamy Indian rice pudding cooked with milk and sugar, flavored with cardamom, saffron, and garnished with nuts. It’s a popular dessert during festivals.',
'Step 1: Simmer rice and milk, Step 2: Add sugar and cardamom, Step 3: Cook until thickened, Step 4: Garnish with nuts and saffron',
'Rice, Milk, Sugar, Cardamom, Saffron, Nuts'),

('food_031', 'Upma', 190, 4.00, 30.00, 5.00, 2.50, 1.00, 300.00, 180.00, 0.90, 'bowl', 1,
'Upma is a savory South Indian breakfast dish made from semolina and cooked with mustard seeds, curry leaves, ginger, and vegetables. It has a light, fluffy texture and is often served hot with coconut chutney.',
'Step 1: Roast semolina, Step 2: Sauté spices and vegetables, Step 3: Add water and semolina, Step 4: Stir until cooked',
'Semolina, Mustard Seeds, Curry Leaves, Ginger, Vegetables'),

('food_032', 'Pav Bhaji', 389, 7.00, 45.00, 18.00, 6.00, 5.00, 780.00, 290.00, 2.20, 'plate', 1,
'Pav Bhaji is a popular Mumbai street food featuring a spicy vegetable mash served with butter-toasted buns. The bhaji is made with mashed potatoes, tomatoes, peas, and spices, creating a rich and flavorful blend.',
'Step 1: Boil and mash vegetables, Step 2: Cook with spices and butter, Step 3: Toast buns, Step 4: Serve hot with lemon and onions',
'Potatoes, Tomatoes, Peas, Butter, Spices, Pav'),

('food_033', 'Dhokla', 121, 4.00, 17.00, 4.00, 1.00, 1.50, 240.00, 140.00, 0.80, 'piece', 1,
'Dhokla is a steamed Gujarati snack made from fermented chickpea flour. Light and fluffy, it is tempered with mustard seeds and green chilies and served with sweet and spicy chutneys.',
'Step 1: Prepare batter and ferment, Step 2: Steam until fluffy, Step 3: Temper with mustard seeds, Step 4: Cut and serve with chutney',
'Chickpea Flour, Mustard Seeds, Green Chilies, Chutneys'),

('food_034', 'Misal Pav', 330, 9.00, 38.00, 14.00, 5.00, 4.00, 780.00, 310.00, 2.40, 'plate', 1,
'Misal Pav is a spicy Maharashtrian curry made from sprouted lentils, topped with crunchy farsan and served with buttered pav. It’s a fiery, flavorful, and filling dish.',
'Step 1: Cook sprouted lentils with spices, Step 2: Prepare spicy gravy, Step 3: Toast pav, Step 4: Assemble and serve',
'Sprouted Lentils, Spices, Farsan, Pav, Onion'),

('food_035', 'Rava Kesari', 266, 3.00, 38.00, 10.00, 1.00, 24.00, 110.00, 170.00, 0.70, 'bowl', 1,
'Rava Kesari is a sweet semolina dessert flavored with saffron and cardamom. This soft and rich treat is commonly served during festivals and special occasions in South India.',
'Step 1: Roast semolina, Step 2: Add saffron-infused water, Step 3: Add sugar and ghee, Step 4: Stir and cook until thick',
'Semolina, Sugar, Saffron, Cardamom, Ghee'),

('food_036', 'Beetroot Poriyal', 126, 2.00, 16.00, 6.00, 4.00, 3.00, 300.00, 270.00, 1.10, 'bowl', 1,
'Beetroot Poriyal is a South Indian stir-fry made with grated beetroot, coconut, mustard seeds, and curry leaves. It’s both nutritious and vibrant in color, often served as a side dish.',
'Step 1: Grate beetroot, Step 2: Sauté with spices and coconut, Step 3: Stir-fry until tender, Step 4: Serve warm',
'Beetroot, Coconut, Mustard Seeds, Curry Leaves, Spices'),

('food_037', 'Sabudana Khichdi', 258, 4.00, 37.00, 11.00, 3.00, 1.00, 450.00, 240.00, 1.40, 'bowl', 1,
'Sabudana Khichdi is a Maharashtrian fasting dish made with soaked tapioca pearls, peanuts, and potatoes, seasoned with cumin and green chilies.',
'Step 1: Soak sabudana, Step 2: Sauté cumin and chilies, Step 3: Add potatoes and peanuts, Step 4: Mix in sabudana and cook',
'Sabudana, Potatoes, Peanuts, Cumin, Green Chilies'),

('food_038', 'Paneer Tikka', 290, 19.00, 10.00, 20.00, 1.00, 3.00, 580.00, 300.00, 2.10, 'skewer', 1,
'Paneer Tikka is a grilled appetizer made by marinating paneer cubes in a spiced yogurt mixture and roasting them on skewers. It’s a popular North Indian starter.',
'Step 1: Marinate paneer, Step 2: Skewer with veggies, Step 3: Grill or roast, Step 4: Serve with chutney',
'Paneer, Yogurt, Spices, Onion, Bell Peppers'),

('food_039', 'Methi Malai Murg', 324, 21.00, 7.00, 23.00, 0.80, 1.00, 690.00, 360.00, 2.40, 'plate', 1,
'Methi Malai Murg is a creamy chicken curry flavored with fenugreek leaves and enriched with cream and cashew paste. It is mild, aromatic, and goes well with paratha or naan.',
'Step 1: Cook chicken with spices, Step 2: Add methi and cream, Step 3: Simmer with cashew paste, Step 4: Serve with bread',
'Chicken, Fenugreek Leaves, Cream, Cashew, Spices'),

('food_040', 'Rasgulla', 186, 3.00, 34.00, 4.00, 0.00, 20.00, 120.00, 100.00, 0.40, 'piece', 1,
'Rasgulla is a Bengali dessert made of spongy, white cheese balls soaked in sugar syrup. It’s light, juicy, and served chilled as a festive sweet.',
'Step 1: Prepare chenna and form balls, Step 2: Boil in sugar syrup, Step 3: Cool and soak, Step 4: Serve chilled',
'Chenna, Sugar, Water, Cardamom')