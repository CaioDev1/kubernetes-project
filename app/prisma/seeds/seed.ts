import {prisma} from '../../src/prisma'

async function main() {
    await prisma.$transaction([
        prisma.$executeRaw`
            INSERT INTO Costumer (\`name\`, \`address\`, \`email\`, \`password\`) VALUES
                ('Mathilde Stehr', '3779 Schmeler Extensions, Weberside, Cuba', 'Adaline.Hettinger@gmail.com', 'k4jWDpCqy7'),
                ('Dagmar Ankunding', '69939 Shields Plaza, New Jon, Switzerland', 'Reinhold.Gleichner70@yahoo.com', '9euDca1J4V'),
                ('Dudley Cummings', '73897 Janelle Path, New William, Saint Vincent and the Grenadines', 'Ford.Wehner67@yahoo.com', 'YbS8XbGB8k'),
                ('Sasha Kub', '19524 Windler Stravenue, Port Jeffryfort, Liechtenstein', 'Eloy_Moen@gmail.com', 'qW0RUI3Y1u'),
                ('Alexandre Schuppe', '79089 Ruby Lodge, Cruzport, Turkey', 'Tyreek96@gmail.com', 'laj1ZAlnKd'),
                ('Bianka Altenwerth', '25440 Mireille Streets, Graysonburgh, Cuba', 'Toney79@hotmail.com', 'P_pHl0gO1v'),
                ('Tracey Murray', '527 Rosella Roads, Mayemouth, Samoa', 'Savanah87@yahoo.com', 'xO8awr2GpQ'),
                ('Jalon Kub', '2062 Boehm Curve, Gerlachchester, Aruba', 'Jermaine_Gutkowski@gmail.com', '8wITsQJ69I'),
                ('Zoie Beer', '21998 Stamm Islands, Mauriceland, Fiji', 'Simeon_Douglas@gmail.com', 'xwTSij2Nih'),
                ('Jeromy Flatley', '1382 Hassan Orchard, West Richie, Vietnam', 'Wilhelmine70@gmail.com', 'SzoPFkLv2r'),
                ('Morton Pfannerstill', '076 Nelda Rapid, Reillymouth, Mozambique', 'Alda21@hotmail.com', 'SLAgce2FI7'),
                ('Maude Schimmel', '52957 Gretchen Green, North Martyfurt, Saint Lucia', 'Ethelyn.Boyer@gmail.com', 'dzOWL0Pc2C'),
                ('Henderson Gislason', '47337 Koelpin Oval, Lake Wadeborough, Chad', 'Dameon_McKenzie@hotmail.com', 'TBvcMkfm9E'),
                ('Monty Cormier', '3623 Roxanne Junctions, Casperland, Afghanistan', 'Jayne_Monahan70@yahoo.com', 'tgg7uQJVZV'),
                ('Kurtis Kris', '58367 Jermaine Cliffs, Krystelville, Pakistan', 'Maryjane.Smith@yahoo.com', 's3EEDlHTQu'),
                ('Breanna Kerluke', '9792 Mallie Lodge, Majorchester, Suriname', 'Shanie.Ryan@hotmail.com', 'bJubjGkhTa'),
                ('Arden Fisher', '93213 Mustafa Tunnel, Masonshire, Liberia', 'Naomi.Hermiston68@hotmail.com', 'TFPxnN2ZYp'),
                ('Mckayla Hayes', '77308 Conroy Courts, Cassinbury, Iceland', 'Jenifer52@hotmail.com', 'ii4JCFgFLH'),
                ('Jacey Lindgren', '858 Walker Villages, North Hal, Latvia', 'Jaleel.Hane11@gmail.com', 'hcZZxN9xAq'),
                ('Caterina Reichert', '59572 Hettinger Terrace, Thompsonborough, Antigua and Barbuda', 'Flavio77@gmail.com', '9cBEJBYkgI');
        `,
        prisma.$executeRaw`
            INSERT INTO Product (\`name\`, \`description\`, \`price\`, \`stock\`, \`category\`) VALUES
                ('Small Plastic Sausages', 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', '428.36', 15, 'Jewelery'),
                ('Ergonomic Rubber Sausages', 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients', '535.93', 42, 'Outdoors'),
                ('Awesome Cotton Towels', 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', '703.94', 28, 'Kids'),
                ('Gorgeous Concrete Salad', 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', '76.40', 81, 'Music'),
                ('Rustic Fresh Fish', 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', '609.90', 44, 'Automotive'),
                ('Intelligent Cotton Shirt', 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', '142.11', 68, 'Games'),
                ('Awesome Granite Pizza', 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', '922.61', 7, 'Outdoors'),
                ('Intelligent Plastic Chair', 'The Football Is Good For Training And Recreational Purposes', '613.17', 94, 'Clothing'),
                ('Small Steel Salad', 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design', '345.89', 66, 'Industrial'),
                ('Handmade Concrete Salad', 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', '978.70', 96, 'Garden'),
                ('Tasty Concrete Chair', 'The Football Is Good For Training And Recreational Purposes', '606.53', 45, 'Shoes'),
                ('Licensed Steel Soap', 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive', '735.59', 22, 'Industrial'),
                ('Sleek Metal Shirt', 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', '506.10', 19, 'Music'),
                ('Fantastic Granite Car', 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart', '21.09', 20, 'Jewelery'),
                ('Gorgeous Frozen Shoes', 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals', '118.12', 54, 'Electronics'),
                ('Rustic Steel Chair', 'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support', '485.69', 99, 'Home'),
                ('Tasty Concrete Mouse', 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', '429.82', 99, 'Computers'),
                ('Sleek Granite Sausages', 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J', '763.91', 23, 'Toys'),
                ('Handcrafted Frozen Cheese', 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', '242.58', 95, 'Health'),
                ('Ergonomic Wooden Bike', 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit', '682.89', 75, 'Garden');
        `
    ]) 
}

main()
    .catch(error => {
        console.log(error)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })