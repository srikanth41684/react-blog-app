import React, { createContext, useState } from 'react';


export const BlogContext = createContext();

const Data = (props) => {

    const [tourism, setTourism] = useState([
        {
            'Image'       : 'https://th.bing.com/th/id/R.372ed89355e3399528c789f78b603854?rik=T%2fwvVL2gd2iZtQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-_jHbj3wIzIs%2fU5QGm6bgkuI%2fAAAAAAAABpM%2fcPqBV4_d10A%2fw1200-h630-p-k-nu%2fthousand%2bpillar%2btemple.jpg&ehk=r46H0iRlLarS67XrVUJAEXzEUX5pux46sWnIQlq89Yg%3d&risl=&pid=ImgRaw&r=0',
            'Title'       : 'Warangal - Thousand Pillar Temple',
            'CategoryName': 'Tourism',
            'Description' : 'The Thousand Pillar Temple is an ancient temple that is tucked away in a small town named Hanamakonda in the vibrant state of Telangana. What makes Warangal one of the best places to visit in telangana is its historical sites. It is the second biggest city tourism in the state. It used to be the capital of the Kakatiya dynasty from 12th to 14th century.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '1'
        },
        {
            'Image'       : 'https://www.holidify.com/images/cmsuploads/compressed/The-Charminar-321141-pixahive_20220523164753.jpeg',
            'Title'       : 'Hyderabad - Charminar',
            'CategoryName': 'Tourism',
            'Description' : 'An identifying feature of the city, Charminar is the most prominent landmark located right in the heart of Hyderabad. The monument was erected by Quli Qutub Shah to signify the founding of Hyderabad. Since the construction of the monument in 1591, Charminar has days of the past era. It is a massive structure which has four minarets which many believe stand for the first four "khalifas" (Prophets) of Islam.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '2'
        },
        {
            'Image'       : 'https://www.papikondalu.org.in/assets/images/papi-kondalu-1-800x500.png',
            'Title'       : 'West Godavari-Papikondalu',
            'CategoryName': 'Tourism',
            'Description' : 'Papikondalu mountain range runs along the River Godavari (Western Godavari) and is located in Rajahmundry, Andhra Pradesh. Papikondalu is a sheer fest to the eyes in terms of its scenic beauty. In accordance with this view resembling the middle partition of a womans hair, it was initially named as "Papidi" Kondalu- Paidi in Telugu means the middle partition of a woman’s hair. Later, it came to be known as Papikondalu in the local language.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '3'
        },
        {
            'Image'       : 'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/05/24143309/Kuntala.png',
            'Title'       : 'Adilabad-Kuntala Waterfall',
            'CategoryName': 'Tourism',
            'Description' : 'Kuntala Waterfall is waterfall located in Kuntala, Adilabad district, Telangana State. It is located on Kadem river in Neredigonda mandal.[1] It is the highest waterfall in the state of Telangana State[2] with a height of 147 feet (45 meters).[3] According to the popular and prevalent local belief Kuntala Waterfall got its name after Shakuntala, other and were mesmerized by the scenic beauty of the surroundings.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '4'
        },
        {
            'Image'       : 'https://images.ixigo.com/image/upload/t_thumb,f_auto/laknavaram-lake-and-suspension-bridge-images-photos-542558aba881c4c920000005.jpg',
            'Title'       : 'Mulugu-Laknavaram Lake',
            'CategoryName': 'Tourism',
            'Description' : 'Laknavaram Lake is a lake located in Govindaraopet mandal in Mulugu district. It is located 17 km from Mulugu and 80km from Warangal, Telangana. Laknavaram Lake is built by the Kakatiya dynasty in 13th century.The lake is spread over an area of 10,000 acres and holds about 2.135 tmcft of water. It irrigates over 3,500 acres of land. It was built by Kakatiya kings. It is surrounded by a thick deciduous forest and it is a very popular tourist spot.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '5'
        },
    ]);

    const [fitness, setFitness] = useState([

        {
            'Image'       : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCuvqbSIovbHQHqk4-xZfmNapvMIJnkW5I4Q&usqp=CAU',
            'Title'       : 'Cardiovascular',
            'CategoryName': 'Fitness',
            'Description' : 'Cardiovascular fitness targets the muscles’ ability to make the best use of oxygen so that they can produce energy for movement.Cardiovascular fitness is often considered to be the most important type of physical fitness due to the wealth of health benefits it offers. These are directly related to the condition of the lungs and heart, and has been known to significantly increase both the length and quality of life.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '1'
        },
        {
            'Image'       : 'https://mainhealthfitness.com/wp-content/uploads/2020/07/rsz_victor-freitas-wvdydxdzkhs-unsplash.jpg',
            'Title'       : 'Anaerobic',
            'CategoryName': 'Fitness',
            'Description' : 'Anaerobic fitness is that which is directly related to short, powerful bursts of energy such as that required for sprinting, power lifting and short, fast movements. Exercises related to anaerobic fitness should be intense enough to cause the formation of lactate, eventually enhancing strength, speed and power for non-endurance activities. Weight-lifting,SprintingPlyometrics (movements associated with increased muscular power).',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '2'
        },
        {
            'Image'       : 'https://th.bing.com/th/id/OIP.3jKk5RhDhiOl1eKHN1jwHQHaEP?pid=ImgDet&rs=1',
            'Title'       : 'Flexibility',
            'CategoryName': 'Fitness',
            'Description' : 'Fitness related to joint flexibility increases a person’s range of movement in a series of joints. In addition to this, it accounts for the lengthening of muscles across joints to facilitate a bending motion. Joint flexibility will vary from person to person, but can still be cultivated with the right workout routine to increase, enhanced posture and improved balanced as well as better strength.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '3'
        },
        {
            'Image'       : 'https://www.verywellfit.com/thmb/SvBSwCxfAZ0cOJDEjAlwuyqhoPk=/2126x1412/filters:fill(FFDB5D,1)/GettyImages-157284836-56da7e615f9b5854a9df3c28.jpg',
            'Title'       : 'Endurance',
            'CategoryName': 'Fitness',
            'Description' : 'Muscular strength is a type of fitness directly related to muscle density and endurance, allowing athletes to perform more repetitions while lifting heavier weights. Endurance and strength training have a number of positive impacts on the body, including increased bone density to reduce the risk of osteoporosis. It helps athletes to manage their weight and muscle mass effectively and can increase metabolism.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '4'
        },
        {
            'Image'       : 'https://hips.hearstapps.com/rbk.h-cdn.co/assets/17/39/1506534969-jeh-rr-key-visual-shot-3-062-lede.jpg',
            'Title'       : 'Balanced',
            'CategoryName': 'Fitness',
            'Description' : 'Managing your own fitness is not about picking the type of fitness that works best for you (although you will find yourself better suited to some types than others), but is more about taking a holistic approach that balances each of these types in equal measure. This makes it important to find a balance between them, as opposed to sticking to the type that you most excel at. Personal trainers understand this, as do Crossfit gyms that take a mixed approach to building all types of fitness.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '5'
        },

    ]);

    const [technology, setTechnology] = useState([

        {
            'Image'       : 'https://th.bing.com/th/id/OIP.TKziVGMgadot4JUwINii7gHaE8?pid=ImgDet&rs=1',
            'Title'       : 'Artificial Intelligence',
            'CategoryName': 'Technology',
            'Description' : 'Artificial Intelligence, or AI, has already received a lot of buzz in the past decade, but it continues to be one of the new technology trends because of its notable effects on how we live, work and play are only in the early stages. AI is already known for its superiority in image and speech recognition, navigation apps, smartphone personal assistants, ride-sharing apps and so much more.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '1'
        },
        {
            'Image'       : 'https://th.bing.com/th/id/OIP.-iaZkok4-Iplr9mb62hY4wHaE8?pid=ImgDet&rs=1',
            'Title'       : 'Cyber Security',
            'CategoryName': 'Technology',
            'Description' : 'Cyber security might not seem like an emerging technology, given that it has been around for a while, but it is evolving just as other technologies are. That’s in part because threats are constantly new. The malevolent hackers who are trying to illegally access data are not going to give up any time soon, and they will continue to find ways to get through even the toughest security measures. It’s also in part because new technology is being adapted to enhance security.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '2'
        },
        {
            'Image'       : 'https://static.vecteezy.com/system/resources/previews/000/528/434/original/blockchain-abstract-technology-vector.jpg',
            'Title'       : 'Blockchain',
            'CategoryName': 'Technology',
            'Description' : 'Although most people think of blockchain technology in relation to cryptocurrencies such as Bitcoin, blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change. Hence the term “chain” because you’re making a chain of data. Not being able to change the previous blocks is what makes it so secure.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '3'
        },
        {
            'Image'       : 'https://th.bing.com/th/id/OIP.h84yvNHiohXRIwYUT-NvcwHaEK?pid=ImgDet&rs=1',
            'Title'       : 'Robotic Process Automation',
            'CategoryName': 'Technology',
            'Description' : 'Like AI and Machine Learning, Robotic Process Automation, or RPA, is another technology that is automating jobs. RPA is the use of software to automate business processes such as interpreting applications, processing transactions, dealing with data, and even replying to emails. RPA automates repetitive tasks that people used to do.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '4'
        },
        {
            'Image'       : 'https://www.teceze.com/sites/default/files/2020-08/a4.jpg',
            'Title'       : 'Edge Computing',
            'CategoryName': 'Technology',
            'Description' : 'Formerly a new technology trend to watch, cloud computing has become mainstream, with major players AWS (Amazon Web Services), Microsoft Azure and Google Cloud Platform dominating the market. The adoption of cloud computing is still growing, as more and more businesses migrate to a cloud solution. But it’s no longer the emerging technology trend. Edge is As the quantity of data organizations is dealing with continues to increase.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '5'
        },
    ]);

    const [bollywood, setBollywood] = useState([

        {
            'Image'       : 'https://imagesv2.desimartini.com/images/202205/bhool-bhulaiyaa-2-1653030553.jpeg',
            'Title'       : 'Kartik Aaryans Bhool Bhulaiyaa 2',
            'CategoryName': 'Bollywood',
            'Description' : 'BHOOL BHULAIYAA 2 is the story of an evil spirit. 18 years ago, in Bhawanigarh, Rajasthan, a family is being harassed by the spirit of Manjulika. A tantric baba (Govind Namdeo) manages to trap Manjulika into a room in a haveli. He then seals the room. In the present day, Reet (Kiara Advani), from the same family is away for studies.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '1'
        },

        {
            'Image'       : 'https://s3images.zee5.com/wp-content/uploads/sites/7/2021/01/ZEE5-7.jpg',
            'Title'       : 'Dhaakad',
            'CategoryName': 'Bollywood',
            'Description' : 'DHAAKAD is the story of a ruthless secret agent. Agent Agni (Kangana Ranaut) is an orphan whose parents were killed by an assassin while she was a kid. She is then raised by a man (Saswata Chatterjee) who works for the ITF, an agency responsible for the country’s safety. Agni turns into a badass agent and she’s sent to Budapest to find out details about a human trafficking racket',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '2'
        },

        {
            'Image'       : 'https://assets.thehansindia.com/h-upload/2022/05/23/1293737-major.jpg',
            'Title'       : 'Adivi Seshs MAJOR',
            'CategoryName': 'Bollywood',
            'Description' : 'Major is a 2022 Indian biographical action film directed by Sashi Kiran Tikka and produced by Sony Pictures International Productions, G. Mahesh Babu Entertainment, and A+S Movies. Filmed simultaneously in Telugu and Hindi languages, the film follows the life of Major Sandeep Unnikrishnan, an army officer who was killed in the 2008 Mumbai attacks. Adivi Sesh (in his Hindi film debut) plays the title character.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '3'
        },

        {
            'Image'       : 'https://static.toiimg.com/photo/91596284.cms?resizemode=4',
            'Title'       : '3 Shyaane',
            'CategoryName': 'Bollywood',
            'Description' : 'The film is about 3 youths who want instant success in life and to achieve this they start walking on wrong path. Later they realize their wrongdoings and want to take u turn from wrong path. It is said that Karma always pays so here these 3 have to pay their price for their wrongdoings and what follows then is the film in all about.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '4'
        },

        {
            'Image'       : 'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/06/02/1049169-jungle-cry.jpg',
            'Title'       : 'Jungle Cry',
            'CategoryName': 'Bollywood',
            'Description' : 'In Sagar Ballary’s Jungle Cry, streaming on Lionsgate Play, the screenplay cuts to the film’s characters speaking to us in documentary-styled clips, where nothing is left to chance by the film’s writers(Dipankar Giri, Diane Charles and Shubhodeep Pal. Whatever the characters aren’t able to communicate through acting, they emphasise in their chaste Hindi VOs.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '5'
        },
    ]);

    const [food, setFood] = useState([

        {
            'Image'       : 'https://i.ytimg.com/vi/-ctU8eSfIHE/maxresdefault.jpg',
            'Title'       : 'Masala dosa',
            'CategoryName':'Food',
            'Description' : 'Masala dosa/Masale Dhosey is a variation of the popular South Indian dosa, which has its origins in Tuluva Udupi cuisine of Karnataka. It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar. It is popular in South India, it can be found in all other parts of the country and overseas. In South India, preparation of masala dosa varies from city to city.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '1'
        },
        {
            'Image'       : 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/xsxi10onczh641t9cjmn',
            'Title'       : 'Biryani',
            'CategoryName':'Food',
            'Description' : 'Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, fish), and sometimes, in addition, eggs and potatoes. Biryani is one of the most popular dishes in South Asia, as well as among the diaspora from the region. Biryani is the single most-ordered dish on Indian online food ordering and delivery services.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '2'
        },
        {
            'Image'       : 'https://th.bing.com/th/id/R.4278c0fc74adb61b5dbd808583cd339c?rik=UzNC1E1bcJLUkw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-KMnil23Roqs%2fUYfS_171LEI%2fAAAAAAAACvc%2fQKqeRyKzok8%2fs1600%2fDSC_0038.JPG&ehk=N9pajzotwey1%2f6Zz5AfZNb90jCdyfOmkxDZm0lSsGlQ%3d&risl=&pid=ImgRaw&r=0',
            'Title'       : 'Paneer tikka',
            'CategoryName':'Food',
            'Description' : 'Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. It is a vegetarian alternative to chicken tikka and other meat dishes. It is a popular dish that is widely available in India and countries with an Indian diaspora.When paneer tikka is served with a sauce, it is called paneer tikka masala. It is also served as with a wrap, paneer tikka roll, where the paneer tikka is wrapped into an Indian bread and served. A variant of paneer tikka is also made as a kebab.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '3'
        },
        {
            'Image'       : 'https://i.ndtvimg.com/i/2018-01/rice-idli_620x330_71514979375.jpg',
            'Title'       : 'Idli',
            'CategoryName':'Food',
            'Description' : 'Idli is a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Eastern and Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice. The fermentation process breaks down the starches so that they are more readily metabolised by the body. Idli has several variations, including rava idli, which is made from semolina. Regional variants include sanna of Konkan.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '4'
        },
        {
            'Image'       : 'https://th.bing.com/th/id/OIP._Orr3yNb3om9LYXSAdbFpAHaFj?pid=ImgDet&rs=1',
            'Title'       : 'Panipuri',
            'CategoryName':'Food',
            'Description' : 'Panipuri (originally named Jalapatra from Mahabharata times) (pānīpūrī (help·info)), phuchka (fuchka (help·info)), gupchup, golgappa, or pani ke patashe is a type of snack that originates from India, and is one of the most common street foods there.Panipuris name varies depending on the region. In Maharashtra, it is known as Pani Puri; Haryana it is known as paani patashi; in Madhya Pradesh fulki; in Uttar Pradesh pani ke batashe/padake.',
            'PublishDate' : 'May 29, 2022',
            'Id'          : '5'
        },

    ]);
  return (
    <div>
      <BlogContext.Provider value={ { value1 : [tourism, setTourism],
                                      value2 : [fitness, setFitness],
                                      value3 : [technology, setTechnology],
                                      value4 : [bollywood, setBollywood],
                                      value5 : [food, setFood]
        }}>

            {props.children}

      </BlogContext.Provider>
    </div>
  )
}

export default Data;