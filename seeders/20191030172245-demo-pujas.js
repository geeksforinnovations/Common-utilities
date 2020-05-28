'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Pujas', [{
            name: 'Aksharabhyasam',
            description: 'Aksharabhyasam is also known as Vidyarambham is a religious function in which the baby is given initiation for education. By doing this ceremony as per shastras the child is ready to receive formal school education with the blessings of Lord Ganesha and Mata Saraswati. This ceremony is one of the Sodas Sankara ( 16 Sanskaras) which every Hindu has to undergo. The meaning of Akshara is alphabets in Sanskrit. Abhyasam means to practice. Aksharabhyasam aims at giving the initial practice of writing letters to the child. this ceremony is generally performed when the baby turns two or two and a half years old.',
            about: 'Aksharabhyasam is one of the 16 sanskaras to be performed, in which the baby when attains age above two years is initiated to write the first letter with the blessings for mata saraswati and lord ganesh and start their schooling life.',
            timeInHrs: 1.0,
            requiredThings: '{bananas , cocunts, camphor}',
            type: 'Both', // Online/ AtHome
            cost: 75,
            imageId: '',

        },
        {
            name: 'Annaprasanam',
            description: 'Annaprasanam is a Sanskrit word which means Grain initiation or Rice feeding. This ceremony is conducted when the baby is ready to make the transition of food intake from a liquid diet to solid diet. This ceremony begins with a pooja or a homam for the baby’s health and happiness, followed by the symbolic feeding of the Prasadam or the first bite of solid food usually Paluannam or Payasam.',
            about: 'Annaprasanam means introducing solid food to the child usually feeding Payasam or Paluannam. After this ritual is carried out, the child can be introduced to different foods.',
            timeInHrs: 1.0,
            requiredThings: '{bananas , cocunts, camphor}',
            type: 'Online', // Online/ AtHome
            cost: 2500,
            imageId: '',

        },
        {
            name: 'Barasala (Namakaranam)',
            description: 'Barasala (Namakaranam) is the naming ceremony of a newborn baby. Nama means ‘name’ and Karanam means ‘to make or to create’. This ceremony is performed to select a newborn’s name using astrological rules or traditional methods of naming. This ceremony takes place after the 10-day ‘impure’ postnatal period.`The chosen name should contain a specified number of syllables and vowels be easy to pronounce and sound pleasant, indicate the sex, signify fame, wealth, or power.`The ceremony is performed, starting with Vighneshwara pooja, Punyaha vachanam, Maha Sankalpam, Kalasha Pooja, and Namakaranam is done by whispering child’s name in the right ear and chanting mantras.',
            about: 'Barasala is the naming ceremony of the child, it is very significant as it’s the first ceremony of a child’s life. By performing the Pooja, the child gets all the blessings for a healthy and happy life.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 3500,
            imageId: '',

        },
        {
            name: 'Karna Vedha',
            description: '"Karnavedha or Karna Vedham is one of the Hindu Samskaras performed for a child. In our tradition, a pierced ear shows how cultured is the family. This ceremony is performed for both girls and boys.`The priest chants the holy verses from the scriptures. He whispers the mantras in the ear of the child and prays for the child’s bright future."',
            about: 'Karnavedha Samskara or Ear Piercing Ceremony is considered as an important ceremony in many Hindu traditions and is one of the 16 samskaras. This ritual is performed for both girls and boys.',
            timeInHrs: 0.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 2500,
            imageId: '',

        },
        {
            name: 'Nischitartham',
            description: '"Nischithartham or the Engagement Ceremony is the event done prior to the marriage by exchanging the rings, by performing this ceremony you get a step closer towards your destination of marriage. The engagement rituals have intense significance in forming a special bond between the would-be couple. By doing this they promise each other to perform their responsibility and shower affection through thick and thin of life.`The ceremony starts with Vighneshwara pooja, Maha Sankalpam, Punyaha vachanam, Nischitartham and in the presence of friends and family, the priest writes the “lagna patrika” and reads it out."',
            about: 'Nischitartham is an important event that takes place prior to marriage where the groom and the bride commits themselves with each other.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 7000,
            imageId: '',

        },
        {
            name: 'Marriage',
            description: 'Marriage Pooja or Vivaham is a commitment between a man and a woman, and this commitment includes love, pleasure tolerance and relaxation. Marriage has always been an integral part of the life of people all over the world. It goes without saying that marriage unites people and makes them very close to each other. Marriage embodies the highest ideals of love, fidelity, devotion, sacrifice, and family. In forming a marital union, two people become something greater than once they were.',
            about: 'Marriage or Wedding ceremony is one of the most important events in one’s life. It signifies the transitional state from Brahmacharayashram to Grihasthashramam. Performing Kalyana pooja acts as an invitation to the many Gods and Goddesses by performing various rituals to come and bless the couple.',
            timeInHrs: 5.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 20000,
            imageId: '',

        },
        {
            name: 'Upanayanam',
            description: 'Upanayanam Ceremony is a very important tradition among the Brahmins. The sacred thread is also worn by some Kshatriyas and Vaishyas. A Brahmin is also called a ‘Dwija’ which means the one who is born twice. A boy is said to be born again when you perform Upanayanam Samskara.  A sacred thread, called Janeu or Yajnopaveetam is placed around the left shoulder of the boy.    `One Sacred thread contains 3 strands, the three strands symbolize three debts.  The debt to Teacher, the debt to parents and ancestors, the debt to the God.`The ceremony is performed, starting with Vighneshwara pooja, Punyaha Vachanam, Maha Sankalpam, Kalasha pooja, Udagashanti, Upanayanam and then the homam is performed as per the Shastras.',
            about: 'This Ceremony or Sacred Thread Ceremony is performed to a boy who enters the age of 8. It makes a person fit to receive instruction in the Vedas and spread their divine power throughout the world.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 8000,
            imageId: '',

        },
        {
            name: 'Sashtiapthapoorthi (60th Birthday)',
            description: 'Sashtiapthapoorthi 60th Birthday Pooja is a ceremony that is celebrated to mark the completion of 60 years of a person. This age is of great importance as by this time one has fulfilled his commitment towards home, family, Society and he can turn his mind towards Spiritual progress.it is celebrated at the completion of the 60th year and entering of the 61st year.`This ceremony is performed by doing different Homam like Ayushya Homam, Mrityunjaya Homam, Navagraha Homam So that the couple have a happy and healthy life ahead.',
            about: 'Sashtiapthapoorthi is a ceremony that is celebrated when the person completes 60 years and enters 61st. This celebration is usually organized by the couple’s children, grandchildren, and younger siblings or relatives.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 10000,
            imageId: '',

        },
        {
            name: 'Bhima Ratha Shanti (70th Birthday)',
            description: 'Bhima Ratha Shanthi 70th Birthday is celebrated to mark the 70th birthday of a person. This age is of great importance as by this time one has fulfilled his commitment towards home, family, and seeking their blessings during those occasions is auspicious. It is celebrated at the completion of the 69th year and entering of the 70th year.`Bhima Ratha Shanthi ceremony is performed by doing different homam like Ayushya Homam, Mrityunjaya Homam, Navagraha Homam So that the couple has a happy and healthy life ahead.',
            about: 'Bhima Ratha Shanti is a ceremony that is celebrated to mark the 70th birthday of a person. This celebration is usually organized by the couple’s children, grandchildren and younger siblings or relatives.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 10000,
            imageId: '',

        },
        {
            name: 'Sathabhishekam (80th Birthday)',
            description: 'Sathabhishekam 80th Birthday Pooja is a ceremony that is celebrated when the man completes the age of 80 also known as ‘Sahastrachandra Darshana Shanti’ as the man would have seen 1000 full moons in his lifetime. This age is of great importance as by this time one has fulfilled his commitment towards home, family, and seeking their blessings during those occasions is auspicious. It is celebrated at the completion of the 80th year and entering of the 81st year.`This ceremony is performed by doing different Homam like Ayushya Homam, Mrityunjaya Homam, Navagraha Homam So that the couple has a happy and healthy life ahead.',
            about: 'Sathabhishekam is a ceremony that is celebrated to mark the 81st birthday of a person. This celebration is usually organized by the couple’s children, grandchildren, and younger siblings or relatives.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 10000,
            imageId: '',

        },
        {
            name: 'Gruhapravesam',
            description: 'Gruhapravesam Pooja is a ceremony which is done before shifting to a new house to cleanse the place from all the evil forces. All the Poojas performed during Pooja helps to bring good fortune.`As per the Pravesham Muhurtham, couples enter the house before to which Dwara Pooja, Gau pooja is performed near the door. After the Pravesham milk boiling ceremony happens, later Ganapati pooja, Punyahavachanam, Sankalpam, Navagraha puja etc are done and after that Vastu Homam, Ganapathi Homam, Navagraha Homam etc are performed at last after Poornahuti, Satyanarayana Vratam is performed.`All the Pooja and Homam Samagries like Pasupu, kumkum, Kalasam, Homam sticks, Navadhanyalu, Navagraha vastralu, Dhoti, ghee etc are brought by our team, you have to keep a few items like plates trays, photos, bowls, mats, prasadam, water, coconuts, gas stove, new milk boiling vessels etc. you will be receiving a to-do list as soon as you book the pooja.',
            about: 'Gruhapravesam Pooja or house warming ceremony is compulsory before moving into a rented or owned house. A dweller can occupy or move things into a property after performing Gruhapravesam.',
            timeInHrs: 6.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: '',

        },
        {
            name: 'Fix Your Muhurtham',
            description: 'Muhurtham is the unit for measurement of time in Hindu calendar.`It is an auspicious time or the best time we consider before starting any important ceremony or pooja. We have 5 attributes in Hindu calendar Nakshatram, Tithi, Varam, Yoga and Karanam.`Based on the quality of Muhurtham It is common practice to start or avoid starting religious ceremonies. The Vedic scriptures also generally recommend one or more Muhurtham to perform rituals and practices.`As said in Shastras ‘Time factor is a form of God’, ‘Time factor is all powerful’. Hence it would be best for us to choose the best time for doing any important work to help us get a good effect.',
            about: 'Muhurtham is of prime importance to enhance the success of performing any act or ceremony to get the best result.',
            timeInHrs: 0.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 2000,
            imageId: '',

        },
        {
            name: 'Seemantham',
            description: 'Seemantham is a set of Vedic Poojas and rituals performed for the welfare of the Pregnant Women. It ensures a good and a healthy delivery of the baby. The Udaka shanthi mantras that are chanted during Seemantha makes sure that it protects the womb of the Mother.`The Seemantham rituals includes important poojas like Punyahavachanam, Kalasa stapanam, Udaka Shanthi, homams and then Kalasabhishekam for the mother. This Pure Kalasa water will give strength to the mother and will enable her to give birth to a strong and a healthy baby.`This ceremony is usually performed along with Poochudal (Flower Decoration for the mother) & Valakappu (Bangle Ceremony).',
            about: 'Seemantham function is performed to the Pregnant Women for a healthy delivery of the child without any obstacles. The Vedic Mantras chanted during Seemantham gives positive energy to the baby inside the womb and to the mother.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 5000,
            imageId: '',

        },
        {
            name: 'Dhanishta Panchakam Shanti',
            description: 'When the Person dies in Dhanista Panchakam, chances of some immediate deaths happening in the next few months in the house increases if the Shanti is not performed. It is highly recommended to perform this shanti after 15th day and before 3 months or maximum before 6th month. After 6th-month Mahamrityunjaya and Navagraha Shanti has to be performed.`Dhanishta Panchakam Shanti has to be performed when the person dies in the below 5 Nakshatras.`Dhanishta Nakshatra`Satabhisha Nakshatra`Poorvabhadrapada Nakshatra`Uttarabhadrapada Nakshatra`Revathi Nakshatra.`This Shanti is performed by qualified vedic priests by doing Ganapathy Pooja, Navagraha pooja, Kula devta pooja, Kalasha avahanam, Sodasaupchara pooja, Rudrabhishekam, Nakshatra japam, Navagraha japam, Homam and Danam.',
            about: 'Dhanishta Panchakam Shanti is to be performed when the person dies in Dhanishta, Sathabhisha, Purva bhadra, Uttarabhadra and Revathi nakshatras. This Shanti helps in avoiding any sudden deaths in family due to Doshas.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 12000,
            imageId: '',

        },
        {
            name: 'Kuja Rahu Sandhi Shanti',
            description: 'When the Mahadasha of Kuja ends and the Mahadasha of Rahu graha Starts, there are lots of Aristha or the problems comes into the life of the person. Sometimes even leads to the death of the person when the planets are weak. By performing Kuja Rahu Sandhi Shanti the native overcomes all the ill effects which will come in their life during that period. This shanti is performed to get away with the problems arising when the Kuja Mahadasha is going on and Rahu Antardasha comes and Vice Versa.`Kuja Rahu Sandhi Shanti Procedure:`Ganapathi pooja, Punyahavachanam, kalasa Pooja is performed. After the avahanam japams of Kuja and Rahu grahas are chanted and after the Japams , Dasams homam of each graha is Performed along with Navagraha Homam.',
            about: 'Kuja Rahu Sandhi Shanti is performed for overcoming all the problems coming during the Kuja Rahu Sandhi. Performing this Shanti helps in maintaining good health and get the positive results of the respective grahas.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 13000,
            imageId: '',

        },
        {
            name: 'Rahu Brihaspati Sandhi Shanti',
            description: 'When the Mahadasha of Rahu ends and the Mahadasha of Guru graha Starts, there are lots of Aristha or the problems comes into the life of the person. Sometimes even leads to the death of the person when the planets are weak. By performing Rahu Guru Sandhi Shanti the native overcomes all the ill effects which will come in their life during that period.`Rahu Brihaspati Sandhi Shanti Procedure:`Ganapathi pooja, Punyahavachanam, kalasa Pooja is performed. After the avahanam japams of Rahu and Guru grahas are chanted and after the Japams , Dasams homam of each graha is Performed along with Navagraha Homam.',
            about: 'Rahu Guru Sandhi Shanti is performed for overcoming all the problems coming during the Rahu Guru Sandhi. Performing this Shanti helps in maintaining good health and get the positive results of the respective grahas.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 12500,
            imageId: '',

        },
        {
            name: 'Shukra Aditya Sandhi Shanti',
            description: 'When the Mahadasha of Shukra ends and the Mahadasha of Surya graha Starts, there are lots of Aristha or the problems comes into the life of the person. Sometimes even leads to the death of the person when the planets are weak. By performing Shukra Aditya Sandhi Shanti the native overcomes all the ill effects which will come in their life during that period.`Shukra Aditya Sandhi Shanti Procedure:`Ganapathi pooja, Punyahavachanam, kalasa Pooja is performed. After the avahanam japams of Shukra and Aditya grahas are chanted and after the Japams, Dasams homam of each graha is Performed along with Navagraha Homam.',
            about: 'Shukra Aditya Sandhi Shanti is performed for overcoming all the problems coming during the Shukra Aditya Sandhi. Performing this Shanti helps in maintaining good health and get the positive results of the respective grahas.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: '',

        },
        {
            name: 'Ayushya Homam',
            description: 'Ayur Devudu is the god of life. Ayushya Homam is a powerful remedy for anyone suffering from any illness or physical stress or with a Balarishta Yoga in their birth chart.`This homam is performed by invoking Ayur Devudu and chanting Ayushya Suktham, to increase your health and longevity of Life (ayushyamu) by reducing health disorders.',
            about: 'Ayushya Homam is performed for increasing the person’s lifespan and getting rid of any health-related or karmic problems arising in our life.',
            timeInHrs: 2.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 20000,
            imageId: '',

        },
        {
            name: 'Chandi Homam',
            description: 'Chandi Homam is dedicated to Goddess Durgamma. Chandi Devi is a powerful and fierce form of Durgamma. This homam is one of the most powerful homam to have a trouble-free life clearing all the obstacles in the path of your success.`This Homam is performed by invoking Chandi Devi followed by the chanting of Durga Saptasati also known as Devi Mahatmayam and then performing this homam as per the shastras.',
            about: 'Chandi Mata is a very fierce and powerful deity. Performing this homam protects us from all our Troubles and sufferings. One shall be blessed with happiness and positivity in life.',
            timeInHrs: 3.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 20000,
            imageId: '',

        },
        {
            name: 'Dhanvantari Homam',
            description: 'Dhanvantari Devudu is the lord or father of health and medicines. The God of Ayurveda is an incarnation of Lord Vishnu who came out of the Ocean during the Samudramanthan. Lord Dhanvantari blesses one with Life longevity(ayushyamu).`This homam is performed by invoking Lord Dhanvantari followed by the chanting of Dhanvantari Mantra for health and then performing the homam using 108 Medicinal herbs. Anyone who is constantly suffering from any ailments should get this homam done for early recovery.',
            about: 'Lord Dhanvantari is the god of health and immortality. Performing this homam helps in getting relief of any disease or any health-related problems arising in one’s life.',
            timeInHrs: 3.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 25000,
            imageId: '',

        },
        {
            name: 'Durga Homam',
            description: 'Durga Devi is the divine universal mother, who took the fierce form to defeat the demon Mahishasura. Durgamma plays a vital role in protecting people from enemies and evil forces. Performing this homam helps in getting rid of all the business-related problems and makes the person have a happy & trouble-free life.`Durga Homam is performed by invoking Durga Devi followed by the Durga Maha mantra chanting than the homamm is performed as per the shastras and vidhana.',
            about: 'Durga means invincible, she is all powerful and merciful. Performing Durga Homam protects one from all the business-related troubles and problems. One shall be blessed with a happy life and positivity in life.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 22000,
            imageId: '',

        },
        {
            name: 'Ganapathi Homam',
            description: 'Ganapathi Homam is dedicated to Ganesha Devudu also known as ‘Vighnaharata’ as he removes any Vighna or obstacles and all negative energies and gives victory.  Lord Ganapathi is supposed to be worshiped before Every auspicious event or ceremony.`Om Gam Ganapataye Namaha!`This Homam is performed by invoking Lord Maha Ganapathi followed by the chanting of Ganapathi Mantra, thereby providing a successful Start and then the homam is performed.',
            about: 'Ganapathi Homam is performed to remove all the obstacles and negative energies in one’s life. It gives victory, success, and harmony in life.',
            timeInHrs: 2.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: '',

        },
        {
            name: 'Hayagreeva Homam',
            description: 'Hayagreeva Swamy is one of the forms of Vishnu Devudu and he is worshiped as the god of knowledge and wisdom. Hayagreeva Homam is specially done for the students for getting the blessing of Lord Hayagreeva to improve their academic ranking and to boost their career life. This homam can also be performed by anyone who pursues an activity which requires knowledge.`This homam is performed by invoking Hayagreeva Swami followed by the chanting of Hayagreeva mantra and then performing this homam as per shastras.',
            about: 'Lord Hayagreeva is worshiped as the god of knowledge and wisdom. This homam relieves us from mental pressure and improves our concentration, memory power, focus and our ability to understand complex things.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 11000,
            imageId: '',

        },
        {
            name: 'Kala Bhairava Homam',
            description: 'Kala Bhairava Homam: Kala Bhairava the ‘Lord of Time’ is one of the powerful manifestations of Lord Shiva. He is the gate keeper of all Shiva temples twirled with serpents all around his body and the dog is his divine vehicle. He is considered as most powerful form among all the Bhairavas. Performing this homam helps one to manage their time efficiently and helps one succeed in their Life.`This homam is performed by invoking Kala Bhairava Swamy followed by the chanting of Lord Kala Bhairava Mantra and then performing the homam and receive the blessings of Kala Bhairava Devudu.',
            about: 'Kala Bhairava known as ‘Lord of Time’ is a form of Lord Shiva. This homam helps a person to develop excellent skills in time management and helps in getting rid of bad karmas.',
            timeInHrs: 1.4,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 13000,
            imageId: '',

        },
        {
            name: 'Karthaveeryarjuna Homam',
            description: 'Karthaveeryarjuna Homam: Karthaveeryarjuna was known as ‘Sahastrabahu’ the Lord with Thousand Hands also known as Restorer of lost wealth. Karthaveeryarjuna is the sishya of Lord Dattatreya. This homam is performed to regain the lost items, things, our near and dear ones.`This Homam is performed by the invocation of Karthaveeryarjuna Devudu followed by the chanting Mantras dedicated to him, and then the homam is performed as per Shastras',
            about: 'Karthaveeryarjuna is considered to be a very powerful Lord with a thousand hands. Performing this homam helps in regaining the lost or stolen materials and it also helps in getting back our lost dear ones.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: '',

        },
        {
            name: 'Lakshmi Ganapathi Homam',
            description: 'Goddess Lakshmi is the god of wealth, light, prosperity, wisdom, fortune & fertility. Ganapathi Devudu is the Lord who removes obstacles and all negative energies and gives victory or success. This Homam is performed to get the blessings of Lakshmamma and Ganapathi Devudu to have a trouble-free life with good wealth and prosperity.`This Homam is performed by invoking the main deities Goddess Lakshmi and Ganesha followed by chanting Mantras of Devi Lakshmi and Ganapathi Devudu and then the homam is performed by offering Lotus flowers to Agni.',
            about: 'Lakshmi Ganapathi Homam is performed to removes all the obstacles and negative energies and gives victory or success, acquire wealth and prosperity and bring harmony in family and success in life.',
            timeInHrs: 2.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 25000,
            imageId: '',

        },
        {
            name: 'Lakshmi Kubera Homam',
            description: 'Lakshmi Kubera Homam is performed for the Goddess Lakshmi, the goddess of wealth, prosperity, light, wisdom, fortune & fertility. Kubera is the king of yakshas and the lord of wealth. Those who perform this homam will receive the grace and blessings of Goddess Lakshmi and Kubera Swamy.`This homam is performed by invoking the main deities Goddess Lakshmi and Kubera followed by the chanting of Lakshmi & Kubera mantra and then performing the homam by offering Lotus flowers to Agni.',
            about: 'Goddess Lakshmi and Lord Kubera are the gods of wealth. Lakshmi Kubera Homam is a powerful remedy for a person who wants to acquire wealth and prosperity or who is under financial crisis or severe debt in life.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: '',

        },
        {
            name: 'Lakshmi Narasimha Homam',
            description: 'Lakshmi Narasimha Homam is performed for goddess Lakshmi and Lord Narasimha. Narasimha Swamy is the fourth Incarnation of Lord Vishnu, the ugra form of man and lion, the destroyer of evil. Lakshmamma is the goddess of wealth and prosperity.`This Homam is performed by the invocation of Goddess Lakshmi and Lord Narasimha followed by the chanting mantras of Goddess Lakshmi and Lord Narasimha and then the homam is performed.',
            about: 'Lord Narasimha is the ugra form Vishnu and the destroyer of evil. Lakshmamma is the goddess of wealth and prosperity. This Homam is a Powerful remedy for a person who is having diseases or is under severe debt or financial crisis in life.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 17000,
            imageId: ''
        },
        {
            name: 'Maha Mrityunjaya Homam',
            description: 'Maha Mrityunjaya Homam is dedicated to Shiva Devudu to relieve from very serious illness or avoid untimely death. Mrityunjaya Homam is performed to achieve Jaya or Victory over Mrityu or death.`Mrityunjaya Homam is performed by invoking Shiva Devudu in the Mahakaal form, followed by the chanting of Maha Mrityunjaya Mantra for Longevity of Life and then performing the Mrityunjaya Homam. Nakshatra Homam is usually coupled with Mrityunjaya homam.',
            about: 'Maha Mrityunjaya Homam is dedicated to Shiva Devudu. Performing this homam rejuvenates the person who is fighting against death or any terminal disease and helps increase the longevity of the person.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 18000,
            imageId: ''
        },
        {
            name: 'Maha Sudarshana Homam',
            description: 'Maha Sudarshana Homam is performed to remove all the obstacles and negative energies. Sudarshana Devudu is in the form of Chakra or disc in the right hand of Lord Vishnu it protects one from their enemies and destroys evil Drishti. This homam is performed to get rid of all the evil effects and get the blessings of lord Sudarshana to lead a wealthy and happy life.`Sudarshana Homam is performed by invoking  Lord Sudarshana followed by the chanting mantras of lord Sudarshana then the homam is performed as per shastras.',
            about: 'Maha Sudarshana Homam is performed to remove all the obstacles and negative energies and gives victory or success, acquire wealth and prosperity and bring harmony in family and success in life.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 23000,
            imageId: ''
        },
        {
            name: 'Mahalakshmi Homam',
            description: 'Goddess Lakshmi is the god of wealth, light, prosperity, wisdom, fortune & fertility considered as the consort of Lord Vishnu and helps to attain financial stability. This homam is performed to get the blessings of goddess Mahalakshmi.`This homam is performed by invoking Goddess Lakshmi followed by the chanting Mantras of Devi Lakshmi and then the homam is performed by offering Lotus flowers to Agni.',
            about: 'Mahalakshmi Homam is performed to removes all the obstacles and negative energies and gives victory or success, acquire wealth and prosperity and bring harmony in family and success in life.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 16000,
            imageId: ''
        },
        {
            name: 'Navagraha Homam',
            description: 'The Navagraha Homam is performed to all the nine Grahas or Planets. The planets control every aspect of human’s life and it has the power to change human’s life at any point in time. This homam is best for getting rid of the Graha doshas.`This homam is performed by invoking all the Nava grahas then mantras of Navagrahas are chanted and then Navagraha homam is performed by providing Navadhanyam, and receive the blessings all the nine grahas.',
            about: 'The Navagraha Homam is performed to all the nine Grahas or Planets. This homam is a powerful remedy for a person’s who has Graha Dosha present in their horoscope and keep away bad luck and misfortune and better their quality of life.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 20000,
            imageId: ''
        },
        {
            name: 'Pratyangira Homam',
            description: 'Sri Pratyangira Devi is a powerful Devi who is half human and half Lion came out of the third eye of Lord Shiva to pacify the anger of Lord Narasimha, she is also known as Narasimhika. Pratyangira Homam is very powerful and it protects one mainly from Black magic or witchcraft.`Pratyangira Homam is performed by invoking Pratyangira Devi followed by the chanting of Mantras dedicated to her and then performing the homam using Dried Red Chilies in the Agni and thereby receiving the blessings of Pratyangira amma.',
            about: 'Goddess Pratyangira is a powerful Devi, Performing Pratyangira Homam helps in Getting away from the destruction of any negative forces, Black magic, Disease, Misfortune, Obstacles, Rivalry and regaining of Power.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 18000,
            imageId: ''
        },
        {
            name: 'Purusha Sukta Homam',
            description: 'Purusha Sukta Homam dedicated to  Lord Vishnu is a very powerful Homam for those having problems conceiving and desire children. Those with children perform it for all-round progress and development of children.`It is stated in the Suta Samhita:`"Putrapradam Aputraanaam Jayadam Jayakaaminaam Bhuktidam Bhuktikaamaanaam Mokshadam Moksha Kaaminaam"`This means that those who wish progeny, success in endeavours, worldly enjoyment and the final stability shall attain it by performing this Homam. This homam is performed by Priests starting with Ganapathy and kalasha Pooja and Vishnu avahanam is done in the kalasam. Later Purushsuktams are chanted and dasams Purush Sukta Homam is performed.',
            about: 'Purusha Sukta Homam is performed to removes all the obstacles and negative energies and gives victory or success, acquire wealth and prosperity and bring harmony in family and success in life.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 12000,
            imageId: ''
        },
        {
            name: 'Raja Matangi Homam',
            description: 'Raja Mathangi devi is a three-eyed goddess, seated on the gem-studded throne. Her luster is like a blue lotus and she is the destroyer of the demons.  Performing Raja Matangi Homam bestows one with power of speech, bliss in family life and protects one from misfortunes.`This homam is performed by invoking Raja Mathangi Devi followed by the chanting of Mantra dedicated to Raja Mathangi devi and then performing the homam as per shastras and vidhi.',
            about: 'Raja Mathangi Devi, is the three-eyed, goddess Shakti. Performing this homam blesses one with knowledge, speech, wealth and happiness.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Raja Shyamala Homam',
            description: 'Raja Shyamala Devi is a very powerful goddess, Worshipping her or doing Homams leads one to success in any business or political life.`This homam is performed by doing Ganapathi pooja , Punyahavachanam, Kalasa Pooja, navagraha pooja, invoking Raja Shyamala Devi followed by the chanting of Mantra dedicated to Raja Shyamala devi and then performing the homam as per shastras and vidhi.',
            about: 'Raja Mathangi Devi, is the three-eyed, goddess Shakti. Performing this homam blesses one with knowledge, speech, wealth and happiness.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 18000,
            imageId: ''
        },
        {
            name: 'Rudra Homam',
            description: 'Rudra Homam is performed to please Lord Shiva who is the destroyer of death. Performing Shri Rudra Homam cleans our previous birth bad karmas, any disorders and relieve us from accidents, very serious illness or untimely death. This homam is performed to achieve Jaya (victory) over Mrityu (death). Rudra Homam significance is to get lord Shiva blessing to attain`Rudra Homam Procedure involves performing Ganapathy pooja, Kalasha aradhane and chanting of Rudram and later the homam is performed as per shastras.`Different types of Rudra Homam are as follows.`Eka Rudra Homam `Ekadasa Rudra Homam `Rudra Ekadashini Homam `Maha Rudra Homam`Athi Rudra Homam',
            about: 'Rudra Homa is performed to appease Shiva Devaru. Performing this homa reduces the process of death and rejuvenates the person who is fighting against death or against any terminal diseases and bestows them with good health.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 23000,
            imageId: ''
        },
        {
            name: 'Saraswati Homam',
            description: 'Goddess Saraswati is the deity who stands for intelligence, memory power, and other soft skills. This homam is specifically done for the students to invoke the blessing of Saraswati Devi to improve their memory power and concentration. This homam can also be performed by working professionals like teachers, researcher’s professors, or spiritual people who are into the world of Knowledge.`Saraswati Devi is also known as “Kalaivani” one who bestows arts, and “Vaghdevi” Goddess of sound and speech.`This Homam is performed by invoking Saraswati Devi followed by the chanting of Saraswati Mantra and then performing the Saraswati homam as per shastras.',
            about: 'Goddess Saraswati is the deity of intelligence, memory power, and other soft skills. This homam relieves us from mental pressure and improves our concentration, memory power, focus and our ability to understand complex things.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 13000,
            imageId: ''
        },
        {
            name: 'Sri Sukta Homam',
            description: 'Sri Sukta Homam dedicated to Goddess Lakshmi consort of Lord Vishnu is a very powerful Homam for removing Financial Problems, hardship and sufferings from debt. This powerful Homam restores and retains Health, Wealth, Peace, Prosperity and Abundance in life and remove obstacles. Sri Sukta is the adoration of Devi Lakshmi with mantras or Stotras.  Sri suktam denama, rupa, swaroopa, greatness etc. of Goddess Sri`“Aarogyam Bhaskarat Itchath Sriyam Itchath Hutasanath”`One can achieve health by praying Sun god and can achieve wealth by praying Goddess Maha Lakshmi through Sacred Fire.`This homam is performed by Priests starting with Ganapathy and kalasha Pooja and Lakshmi devi is invoked in the kalasam. Later Sri Suktams are chanted and dasams Srisukta Homam is performed.',
            about: 'Sri Sukta Homam is performed to removes all the obstacles and negative energies and gives victory or success, acquire wealth and prosperity and bring harmony in family and success in life.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 18000,
            imageId: ''
        },
        {
            name: 'Ayudha Pooja',
            description: 'Ayudha Pooja is celebrated on the ninth day of Navaratri. This pooja is also known as ‘Astra Pooja’. This pooja is worshiping of whichever implements we use in our life, by keeping them in the altar or giving it a rest from using on that day.`This pooja is done by invoking the Lord and chanting mantras and the pooja is done as per the shastras to get the blessings.',
            about: 'Ayudha Pooja is worshiping of equipment’s that are used in our professional life. On the ninth day of the Navaratri its auspicious to place the equipment on the altar and worship it, and get the blessings from the Lord.',
            timeInHrs: 0.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 5000,
            imageId: ''
        },
        {
            name: 'Ayyappa Swamy Pooja',
            description: 'Ayyappa Swamy is also known as ‘Hariharan’ as he is born from the union of Lord Vishnu in Mohini avatar and Lord Shiva. He is also known as ‘Manikandan’ one who is born with a bell around his neck. Devotees go to Sabarimala to get the blessings of his lordship.`This Pooja is performed by invoking Lord Ayyappa and then chanting of mantras dedicated to him is done and the pooja is carried out by offering the ghee to the Lord.',
            about: 'Lord Ayyappa Swamy is the son of Mohini and Lord Shiva. A person who goes to Sabarimala for the 1st time is said to be “Kanni Ayyappan”. He takes vratham for 41 days. This pooja is very beneficial to those who have Shani dosha in their horoscope.',
            timeInHrs: 2.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 30000,
            imageId: ''
        },
        {
            name: 'Bhoomi Pooja',
            description: 'Bhoomi Pooja is performed to appease Bhoomamtalli or Goddess Earth. This pooja is most important to be performed before any construction. By doing this pooja we take the permission and seek forgiveness from Bhoomi Devi as during construction we disturb the earth’s equilibrium.`This pooja is performed usually in the north-east corner of the plot by invoking Bhoomi Mata, and mantras are chanted dedicated to Goddess earth and the pooja is performed to seek the blessings to have a happy life.',
            about: 'Bhoomi Pooja is performed for Goddess Bhoomi and Vastu Purush, lord and deity of directions, five elements of nature to remove negative influences or Vastu doshas of the place.',
            timeInHrs: 0.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 3000,
            imageId: ''
        },
        {
            name: 'Chandi Saptashati Parayanam',
            description: 'Chandi Saptashati Parayanam is dedicated to Durga devi. This parayanam is one of the most powerful poojas for those who are having trouble in finding job and performing this pooja helps one have a trouble-free life, clearing all the obstacles in the path of your success.`Chandi Saptashati Parayanam is performed by invoking Durga devi followed by the chanting of Durga Saptashati also known as Devi Mahatmayam and then Parayanam is performed as per the shastras.',
            about: 'This Parayana is dedicated to Durga devate, also known as Chandi devate. Performing this parayana protects and helps us overcome all our troubles and sufferings. This pooja also liberates one from evil eyes, fears and curses.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 10000,
            imageId: ''
        },
        {
            name: 'Dhanalakshmi Pooja',
            description: '‘Dhana’ means ‘wealth’, Lakshmamma grants all boons to those who performs pooja with great devotion and purity. Goddess Lakshmi is the god of wealth, light, prosperity, wisdom, fortune & fertility considered as the consort of Lord Vishnu and helps to attain financial stability. This Pooja is performed to get the blessings of goddess Lakshmi.`This Pooja is performed by invoking Goddess Lakshmi followed by the chanting Mantras and then the Pooja is performed as per shastras.',
            about: 'Dhanalakshmi Pooja is performed to remove all the obstacles and negative energies and gives victory or success, acquire wealth and prosperity and bring harmony in family and success in life.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 12000,
            imageId: ''
        },
        {
            name: 'Durga Pooja',
            description: 'Durga Pooja is dedicated to Durgamma. Durga Devi has many names like Sati, Parvathi, Gauri, Ambika, Bhavani. This Pooja is one of the most powerful Pooja to have a trouble-free life clearing all the obstacles in the path of your success.`This Pooja is performed by invoking Durga Devi followed by the chanting of Durga mantra then performing this Pooja as per the shastras.',
            about: 'Durgamma is a very powerful deity. Performing Durga Pooja protects us from all our Troubles and sufferings. One shall be blessed with a happy life and Positivity in life.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 6000,
            imageId: ''
        },
        {
            name: 'Ganapati Pooja',
            description: 'Ganapati Pooja or Siddhi Vinayaka Pooja is dedicated to Ganesha Devudu also known as ‘Vighnaharata’ as he removes any Vighna or obstacles and all negative energies and gives victory or success.  All the rituals start with Vighneshwara pooja and then followed by all other Poojas.`This Pooja is performed by invoking Lord Vinayaka followed by the chanting of Vinayaka Mantra, thereby providing a successful Start and then the pooja is performed.',
            about: 'Siddhi Vinayaka Pooja is performed for Vinayaka Devudu who removes all the obstacles and negative energies. This pooja bestows one with the victory, brings harmony in family and helps one succeed in life.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 5000,
            imageId: ''
        },
        {
            name: 'Kedareswara Nomu or Vratham',
            description: 'Kedareswara Nomu or Vratham was performed by Parvatiamma to become a part of Lord Shiva to form the famous avatar of ‘Ardhanareeswara’ which states the importance to look upon woman as equal to man. This vratham is also known as Kedara Gauri vratam as Gauramma performed this vratam.`This pooja is performed by invoking lord Kedareshwar and chanting mantras dedicated to him and the pooja is continued as per shastras so that we get the blessings of lord Shiva and Parvati.',
            about: 'This Vratham was performed by Parvati devi to become a part of Lord Shiva which signifies the importance to look upon woman as equal to man. It helps in fulfilling all our boons and desires.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Lalitha Sahasranama Pooja',
            description: 'Lalitha Sahasranama Pooja is dedicated to Lalitha Devi. This is taken from Brahmanada Purana and divided into three parts “Poorva Bhaga, Stotra and Uttara Bhaga “. The Poorva Bhaga talks about its origin, Stotra consists of 1000 Namas  The Uttara Bhaga gives details of the benefits of recitation of this Lalitha Sahasranamam. Lalitha Sahasranamam came directly from Shiva, which he passed to Nandi, From Nandi, it went to Hayagriva and then to Sage Agastya muni.  This Parayanam is more powerful than any tantra or mantra when chanted with pure devotion.`Lalitha Sahasranama Pooja  is performed by doing Ganapathi pooja, Sodasupchara pooja and parayanam is done.',
            about: 'Performing Lalitha Sahasranamam Pooja and Parayanam helps one get the blessings of Lalitha Devi and helps in protection against evil and ill effects of the malefic planets, helps in curing any fever or disease.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 10000,
            imageId: ''
        },
        {
            name: 'Maha Lingarchana',
            description: 'Maha Lingarchana is a worship of Lord Shiva, while performing puja to 365 Mruthika Linga (Putta mannu linga) . To name a few of the deities, Ashtadikpalakas, Ashta Ganapathi, Dakshina Murthy, Trishulas,  Maha Lingam, Yama, Chitragupta, Tandaveshvars etc. arranged in a prescribed manner known as “Kailasa Yantra Prastaram” and an idol of Sri Ganesha.`Pooja is performed for each lingam, than Abhishekam is performed with Panchamrutham and then abhishekam with juices of different fruits is done.',
            about: 'Maha Lingarchana pooja is performed to get the benefit of worshiping Lord Shiva for an entire year, that is 365 days and it helps in overcoming all the problems and bad health the person is facing in his life.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 20000,
            imageId: ''
        },
        {
            name: 'New Business / Office Opening Pooja',
            description: 'New Business Pooja / Office Opening Pooja is done for the new building or business to have a positive and fresh start to get all the success and happiness. Any negative forces existing in the place and the bad effects of the grahas are removed by performing this pooja.`This pooja includes Ganesha pooja to remove all the obstacles and gain wisdom and Lakshmi pooja to gain all the auspiciousness and wealth and success in the business and Navagraha pooja and the Prasad is distributed to everyone in the office.',
            about: 'In the new building or place many negative energies exist, by performing this pooja blessing of God is invoked to negate the power or influence of negative energies and brings success in the business.',
            timeInHrs: 0.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 8000,
            imageId: ''
        },
        {
            name: 'Punyahavachanam',
            description: 'Punyahavachanam is performed after the 10-day ‘impure’ postnatal period, this usually involves the cleansing the house and purifying it by performing ganapathy puja and kalasha puja and the mantras are chanted to invoke the power in water and the purified water is sprinkled on the baby, mother, father and everyone in the house and prokshanam is done in all parts of the house.',
            about: 'Punyahavachanam is performed on the 11th day after the child birth, this ceremony is performed for purifying the house and the members in the home.',
            timeInHrs: 0.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 2500,
            imageId: ''
        },
        {
            name: 'Rudrabhishekam Pooja',
            description: 'Rudrabhishekam pooja is done to worship Lord Shiva in Rudra form. Rudra Suktham is chanted while bathing the Shiva lingam. Lord Shiva is also known as Bholenath as he gets very easily pleased by the prayers of his devotes.`In this pooja, Shiva Lingam is bathed with panchamritam and water. All eleven forms of Rudra are worshiped. After the avahanam and sthapana, Laghu-nyasam is recited followed by Rudra Trishati.',
            about: 'Rudrabhishekam is a very powerful pooja of Lord Shiva. Lord Rama did Rudrabhishekam in Rameswaram to Shiva lingam to get the blessings of Lord Shiva. This pooja helps in having a strong mind, good health and getting rid of evil effects.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Saraswathi Pooja',
            description: 'Saraswathi Pooja is performed for Goddess Saraswati. Goddess Saraswathi, the consort of Lord Brahma, is the Hindu Goddess of knowledge, intelligence, arts, music and wisdom. This Pooja helps to gain intelligence, wisdom, knowledge and strong memory. This pooja will help one to get blessings from Saraswati devi and excel in studies, arts, music or at working place and attain growth in their respective career.`This pooja is performed by invoking Goddess Saraswati followed by the chanting of Saraswati Mantra and then performing the Saraswati puja to receive Goddess Saraswati’s blessings.',
            about: 'Saraswati devi is the deity of intelligence, wisdom, arts, music, memory power and other soft skills. This havan relieves us from mental pressure and improves our concentration, memory power, focus and our ability to understand complex things.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 7000,
            imageId: ''
        },
        {
            name: 'Satyanarayana Pooja',
            description: 'The meaning of Satyanarayana Pooja is Satya means ‘Truth’ and Narayana means ‘the highest being’. This pooja is performed to appease Lord Vishnu. This pooja is mentioned in Skanda Purana. Anyone who does this pooja with great devotion gets the blessings of Lord Satyanarayana. The main part of the pooja is reciting the great stories of the Lord himself and about his grace for the people.`This Pooja is performed by invoking Lord Satyanarayana and chanting mantras and kathas in the praise of Lord Satyanarayana.',
            about: 'Satyanarayana Pooja is performed to removes all the obstacles and negative energies and gives victory or success, acquire wealth and prosperity and bring harmony in family and success in life.',
            timeInHrs: 3.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 18000,
            imageId: ''
        },
        {
            name: 'Udaka Shanthi',
            description: 'Udaka Shanti is performed for peace and harmony in the house, this shanti is generally performed before any function or ceremonies like Upanayan, Gruha pravesh pooja , Marriages, Well being of baby in the womb, performed after the birth of the baby and for shanti in the home. Udaka shanti mantras has the essence of vedas.`Water is used in all vedic karmas, achamanam, and santhyavanthanam rituals. The water of river is always considered sacred and can be used directly without infusion for the purpose of purification of materials and objects.`This Shanti is performed by Purohits, starting with Ganapathi pooja and Varundeva and other Gods are invoked in the Kalash filled with water and the Udakashanti mantras from yajurvedam are chanted which consists of 1441 lines.',
            about: 'Udaka Shanti is performed by invoking gods in the kalash and udakashanti mantras are chanted which consists of 1441 lines. performing this puja brings happiness and good fortune in ones life , it has all the essence of vedas.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 12000,
            imageId: ''
        },
        {
            name: 'Varalakshmi Pooja',
            description: '‘Vara’ means ‘boon’ or ‘Varam’ and Lakshmamma grants all boons to those who perform pooja with great devotion and purity. Goddess Lakshmi is the god of wealth, light, prosperity, wisdom, fortune & fertility considered as the consort of Lord Vishnu and helps to attain financial stability. This Pooja is performed to get the blessings of goddess Varalakshmi.`This Pooja is performed by invoking Goddess Lakshmi followed by the chanting Mantras of Varalakshmi and then the Pooja is performed as per shastra',
            about: 'Varalakshmi Pooja is performed to remove all the obstacles and negative energies and gives victory or success, acquire wealth and prosperity and bring harmony in family and success in life.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 12000,
            imageId: ''
        },
        {
            name: 'Vastu Shanti Pooja',
            description: 'Vastu Purush who is the soul, protector, and lord of a house is the main deity while performing Vastu Shanti Pooja. This pooja is very important to remove all the Vastu Doshas, and the person doing this pooja attains all comforts happiness and prosperity.`Vastu Purush the lord of directions, is invoked while performing this pooja, chanting of mantras is done and pooja is done as per the shastras.',
            about: 'Vastu Shanti Pooja is performed for Vastu Purush, lord of directions, five elements of nature to remove negative influences or Vastu doshas of the home or office to have a good and happy life.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Vishnu Sahasranama Pooja',
            description: 'Vishnu Sahasranama Pooja is dedicated to Lord Vishnu. The person with devotion and whole heartedly turned towards him, recites these thousand names of Keshava every day, after having purified himself, succeeds in acquiring great fame, a position of eminence among his kinsmen, enduring prosperity.`It is said in Phala Shruti:`Nothing inauspicious will befall the one who devoutly listens to the recital of this sahasranama stotra daily.`If the person who chants these names is a brahmin he will attain the knowledge of the Vedanta; if a kshatriya, he will become a victorious warrior; if a vaisya, he will acquire immense wealth, and if a sudra, he will remain happy.`Vishnu Sahasranama Pooja is performed by doing Ganapathi pooja, Sodasupchara pooja and parayanam is done.',
            about: 'Vishnu Sahasranamam parayanam helps in getting blessing from Lord Vishnu and those who recite these holy names of the Lord with full faith and devotion will reap the desired fruits without fail.',
            timeInHrs: 2.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Drishti Durga Homam',
            description: 'Goddess Durga helps in clearing all the obstacles in the path of your success, negative forces or drishti are destroyed, any ailments are cured, improvement in your respective fields. Performing this homam helps in getting rid of all the business-related problems and makes the person have a happy and stable life.`Drishti Durga Homam is performed by invoking Goddess Durga followed by the Drishti Durga maha-mantra chanting than the homam is performed as per the shastras.',
            about: 'Durgamma helps in clearing all the obstacles, Performing Drishti Durga Homam protects the person from all the business-related troubles and problems. One shall be blessed with a happy life and Positivity in life.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 10000,
            imageId: ''
        },
        {
            name: 'Durga Lakshmi Saraswati Homam',
            description: 'Goddess Durga helps in clearing all the obstacles in the path of your success. Goddess Lakshmi is the god of wealth, light, prosperity, wisdom, fortune & fertility Goddess Saraswati is the deity of intelligence, memory power, and other soft skills. Performing this homam helps in getting all the required talent or quality to get a job and get the blessing.`This Homam is performed by invoking Goddess Durga, Lakshmi and Saraswati followed by the chanting Mantras dedicated to all the three Devis and then the homam is performed by offering Lotus flowers to Agni.',
            about: 'Durga Lakshmi Saraswati Homam is performed to get a proper job and it removes all the obstacles and negative energies and gives victory or success, acquire wealth and prosperity and bring harmony in family and success in life.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 12000,
            imageId: ''
        },
        {
            name: 'Gnana Saraswati & Vidhya Ganapathi Homam',
            description: 'Goddess Saraswati is the deity of intelligence, memory power and other soft skills. Ganesha Devudu also known as ‘Vighnaharata’ removes any Vighna or obstacles and all negative energies and gives victory or success. This homam is specifically done for the students to invoke the blessing of Saraswati Devi and Ganapathi Devudu to improve their memory power and concentration.`This Homam is performed by invoking Saraswati Devi and Ganesha Devudu followed by the chanting of Saraswati Mantra and Ganesha Mantra and then performing the homam.',
            about: 'Goddess Saraswati gives intelligence, memory power and other soft skills and lord Ganesha removes obstacles and all negative energies and gives victory or success. This homam relieves us from mental pressure and improves our concentration, memory power, focus and our ability to understand complex things.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 8000,
            imageId: ''
        },
        {
            name: 'Homam For Good Education',
            description: 'This Homam is specifically done for the students to invoke the blessing of Saraswati Devi, Hayagreeva, and Navagrahas to improve their memory power and concentration. This homam can also be performed by working professionals like teachers, researcher’s professors, or spiritual people who are into the world of Knowledge.`Goddess Saraswati is the deity who stands for intelligence, memory power, and other soft skills. Hayagreeva the god of knowledge and wisdom and Navagraha doshas are removed by doing Navagraha homam.`This homam is performed by doing Ganapathi pooja, Punyahavachanam, Kalasha Pooja, Mantapa aradhana, Japam and Homam.',
            about: 'This homam which includes Saraswati homam, Hayagreeva homam and Navagraha homam which relieves us from mental pressure and improves our concentration, memory power, focus and our ability to understand complex things.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 10000,
            imageId: ''
        },
        {
            name: 'Homam For Good Health',
            description: 'Homam For Good Health Includes performing of below-mentioned Homams for the overall good health of the person suffering from any health issues or the ones who regularly fall ill.`Mrityunjaya Homam for getting blessings of Lord Mrityunjaya.`Ayush Homam For good Ayu by chanting Ayush Suktams.`Dhanvantri Homam for getting blessings of Lord Dhanvantri.`Navagraha Homam for getting rid of any Graha doshas.`This Homam is performed by doing Ganapathi Pooja, Punyaha vachanam, Sankalpam, kalasha Pooja, Mantapa Pooja, Japams and dasams Homam will be performed.',
            about: 'Homam for good health is performed for persons who are not well or going through repeated health problems in their life. Performing this Homam rejuvenates the person who is fighting against death or any disease and helps increase the longevity of the person.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 10000,
            imageId: ''
        },
        {
            name: 'Homam For Pregnancy',
            description: 'Homam For Pregnancy Includes performing of below-mentioned Homams for getting the blessings of Lord Mahavishnu, Krishna in Balgopala form and Navagrahas.`Santana Gopala Homam performed for Krishna in Balagopala form.`Purush Sukta Homam for Maha Vishnu by chanting Purush Suktams.`Navagraha Homam for getting rid of any Graha doshas which are hindering our progress.`This Homam is performed by doing Ganapathi Pooja, Punyaha vachanam, Sankalpam, kalasha Pooja, Mantapa Pooja, Japams and dasams Homam will be performed.',
            about: 'Homam for Pregnancy is performed for the couples who are having problems in conceiving the baby. Performing this Homam helps in removes the negative doshas and increases the chances of getting pregnant.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 10000,
            imageId: ''
        },
        {
            name: 'Homam For Wealth',
            description: 'Homam For Wealth Includes performing of below-mentioned Homams for getting the blessings of Mata Lakshmi and Kubera, So that we can conserve the present wealth and further increase our financial stability.`Lakshmi Kubera Homam performed for Lakshmi and Kubera.`Srisukta Homam for lakshmi devi by chanting SriSuktams.`Navagraha Homam for getting rid of any Graha doshas which are hindering our progress.`This Homam is performed by doing Ganapathi Pooja, Punyaha vachanam, Sankalpam, kalasha Pooja, Mantapa Pooja, Japams and dasams Homam will be performed.',
            about: 'Homam for good Wealth is performed for persons who are having financial problems in their life. Performing this Homam helps in removing the hindrances coming in our business and daily life and with the blessings of Lakshmi devi and Kubera you will overcome all the money-related problems.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 10000,
            imageId: ''
        },
        {
            name: 'Janana Nakshatra Shanti Homam',
            description: 'There are a total of 27 Nakshatras. We fall under the influence of different Nakshatras depending on the Rashi we are born under the time of our birth. Each Nakshatra will have 4 Padam and based on which Nakshatra and Padam baby is born, Some will have positive effects and some will have negative effects on Baby, Father, Mother, Mama etc.`Sometimes when the baby is born under Durmuhurtham or Varjyam then also Full nakshatra Shanti has to be performed.',
            about: 'Nakshatra Shanti Homam is performed for the newborn baby when dosham is present, also this Shanti is performed when the child is born in Varjyam, Durmuhurtham, Amavasya and Grahanam.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Kadali Vivaham',
            description: 'Kadali Vivaha helps one get rid of Manglik dosha in their Horoscope. When Mangal or Kuja Graha sits in the 1st, 4th, 7th, 8th, 12th house of the horoscope it sees the seventh house of the Kundali. The highest degree of Manglik dosh is observed when Mars sits in the 1st and 7th house. The seventh house is considered as the house of marriage or house of the life partner or the house of the spouse. As per the Vedic astrology, the effect of Mars in the seventh house is not good for the Marriage and married life. Mangal Graha is considered the most Malefic Planet or Papi Graha as far as the marriage of a person is considered and its placement in certain houses results in Mangalik dosh. If a Manglik boy/girl is married to a Non-Manglik spouse then the event of death or severe accidents have been witnessed by many couples which lead to death, permanent disability of the Non-Manglik spouse. Sun, Saturn, Rahu and Ketu’s placement in the houses mentioned above also forms partial Manglik Dosh.',
            about: 'Kadali Vivaha is performed for the male who is having Manglik dosh or having second marriage yoga in her horoscope and lead a happy life without any hurdles caused by the malefic effects of the bad planet position in the birth chart.',
            timeInHrs: 2.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 20000,
            imageId: ''
        },
        {
            name: 'Kala Sarpa Dosha Nivarana',
            description: 'When the Planets Rahu and Ketu surround all other planets and rest 7 houses being empty is said Kala Sarpa Dosha or yoga. Unusual and unexpected incidents happen in a person’s life like child problems, loss in business, family problems etc.`This Pariharam is performed by invoking Rahu and Ketu and chanting mantras to please the Graha and the homam is performed as per the shastras to get rid of all the problem occurring due to this dosha.',
            about: 'In the Horoscope if Kala Sarpa dosha is present than person faces sudden rise and fall in the life. This Nivarana should be performed to get rid of all the ill effects caused by this dosha.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Kalathra Dosha Nivarana',
            description: 'Kalathra denotes our life partner or Spouse, 7th house in our horoscope is the Kalathra Sthana, house indicating spouse. Any malefic planet in 7th house creates Kalathra Sosham, or when Venus is afflicted by the malefic planet. This Pariharam is highly recommended for couples who have this dosham to lead a blissful life.`This Homam is performed by invoking the affected planet devudu and chanting mantras for that planet god and the homam is performed as per the shastras to get rid of all the problem.',
            about: 'When the 7th house in our horoscope is affected by malefic planets than Kalathra Dosham is present. This Homam is performed to get rid of all the problems arising between couples and help them lead a happy life.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 12000,
            imageId: ''
        },
        {
            name: 'Kumbha Vivaham',
            description: 'When Mangal or Kuja Graha sits in the 1st, 4th, 7th, 8th, 12th house of the horoscope it sees the seventh house of the Kundali. Highest degree of Manglik dosh is observed when Mars sits in the 1st and 7th house. The seventh house is considered as the house of marriage or house of the life partner or the house of the spouse. As per the Vedic astrology, the effect of Mars in the seventh house is not good for the Marriage and married life. Mangal Graha is considered the most Malefic Planet or Papi Graha as far as the marriage of a person is considered and its placement in certain houses results in Mangalik dosh. If a Manglik boy/girl is married to a Non-Manglik spouse then the event of death or severe accidents have been witnessed by many couples which lead to death, permanent disability of the Non-Manglik spouse. Sun, Saturn, Rahu and Ketu’s placement in the houses mentioned above also forms partial Manglik Dosh.',
            about: 'Kumbh Vivah is performed for the female who is having Manglik dosh or having second marriage yoga in her horoscope and lead a happy life without any hurdles caused by the malefic effects of the bad planet position in the birth chart.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Santhana Gopala Homam',
            description: 'Krishna Devudu is the protector of lives and he solves the problem of fertility, prevents the delay in childbirth and other complications during pregnancy. Couples who have problems in conceiving or getting baby then this is the best homam to perform to get the blessings of Lord Krishna to get the baby.`This Homam is performed by invoking lord Krishna followed by the chanting of Mantras to Lord Krishna and then performing the homam as per shastras.',
            about: '‘Santhana’ means heir and ‘Gopala Krishna’ is the baby Krishna. Anyone who performs Santhana Gopala Homam with great devotion gets the blessings from Lord Krishna to get a child with good health and immense knowledge.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 12000,
            imageId: ''
        },
        {
            name: 'Shatru Samhara Homam',
            description: 'Lord Subramanya, Son of Lord Shiva also known by names like Karthikeya, Skanda, Muruga, the destroyer of all evil forces in this universe protects and prevents one from evil eyes, curses of gods, planets, and ancestors. This Homam is performed to nullify all these evil effects.`This Homam is performed by invoking Karthikeya Devudu and chanting mantras for Lord Karthikeya and the homam is performed as per the shastras.',
            about: 'Shatru Samhara Homam dedicated to Lord Karthikeya or Subramanya is done to remove all evil, enemies and all negativity in your life and fills your life with joy and happiness.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Swayamvara Parvathi Homam',
            description: 'Swayamvara Parvathi Homam is dedicated to Goddess Parvati the consort of Lord Shiva. If the 7th house in our horoscope is effected by malefic planets then it becomes difficult to find a suitable partner. This homam is one of the most powerful homam to get rid of the malefic effects and helps in getting a good life partner.`This Homam is performed by invoking Parvati Amma followed by the chanting of mantras dedicated to Goddess Parvati and then the homam is performed as per Shastras.',
            about: 'Swayamvara Parvathi Homam is performed to appease Goddess Parvati for removing various obstacles that delay any marriage, or difficulty in finding the good partners.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 13000,
            imageId: ''
        },
        {
            name: 'Anagha Vratham',
            description: 'Anagha Vratham is dedicated to Dattatreya, Anagha Devi and their 8 sons. This Vratham is famously performed in the Margashira Bahula Ashtami. Performing this Vratham blesses the couples with lots of happiness and harmony in their marital life, Vimukti from Papam, The Yajmani attains good heights in their daily and professional life.`Anagha Vratham is performed by doing ganapathi pooja, Kalasha Avahana, Dattatreya Pooja Anagha devi sahita Asta putra pooja, Abhishekam, Katha Sravanam and Aarti is performed.',
            about: 'Anagha Vratham is performed to Lord Dattatreya, Anagha Devi and Asta Putra. Performed for Marital Happiness and Bliss. This Pooja is performed during krishna paksha Astamis and Specially during Margashira bahula Asthami.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 10000,
            imageId: ''
        },
        {
            name: 'Ananta Padmanabha Vratham ',
            description: 'Anantha Padmanabha Vratha Pooja is dedicated to Sri Maha Vishnu devaru, who is lying on the couch of ‘Ananthsesha’ the thousand hooded snake. Ananth means infinite or endless, anyone who does this vratha pooja obtains long and healthy life and gets Gyana or enlightenment and all the sorrows are removed. This vratha is usually observed on Ananth Chaturdashi day.`Ananta Padmanabha Vratha Pooja is performed by invoking Lord maha Vishnu in ananth Padmanabha form, the mantras are chanted and the pooja is carried out.',
            about: 'Anantha Padmanabha vratha pooja is performed for Vishnu devaru in the shesha shayana posture, who is the creator of this universe. By performing this pooja one attains good health and long life and all his sorrows are removed.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 11000,
            imageId: ''
        },
        {
            name: 'Budha Graha Japam',
            description: 'Budha the son of Moon is the wisest planet, represents education, business, Self-confidence, communication, analysis, mathematics. When Budha is wrongly placed in our horoscope, then it gives problems like mental problems, nervous breakdown problems, financial Losses.`This japam is performed by invoking Budha and chanting mantras for Budha god and the Budha Graha Shanti Japam is performed as per the shastras to get rid of all the problem occurring due to this dosha.',
            about: 'Budha brings unhappiness and all evil effects if the person has Budha dosha present in one’s horoscope.  All the bad effects of the Budha Graha dosha can be overcome by performing this graha shanti japam.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Chandra Graha Japam',
            description: 'Chandra also called as Soma, depicts mind and brain, sensitivity, softness, moods, feelings, emotions, affection, fancies, queen and mother. When Chandra is malefic or wrongly placed in our horoscope or situated in 4th, 6th, 8th or 12th house then it causes problems like Loss of memory, loss of confidence, menstrual troubles, breathing problems and fertility issues.`Chandra Graha Japam is performed by invoking Chandra and chanting mantras for Moon god to please the graha and the japam is performed as per the shastras and vidhana.',
            about: 'Moon is responsible for childhood, pleasures, fertility. Moon brings unhappiness and all Evil effects if it is wrongly placed.  All the malefic effects of the Chandra Graha dosha can be nullified by performing this japam with full devotion.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Guru Graha Japam',
            description: 'Guru is also known as Brihaspati, represents knowledge, education, law, justice, politics, positivity, future and ethics. When Guru is wrongly placed in our horoscope then it gives problems like financial problems, obstacles in education, health problems, etc. It’s very much important to perform this Japam for those who have Guru dosha in their horoscope.`Guru Graha Japam is performed by invoking Guru and chanting mantras for Brihaspati to please the graha as per the shastras to get rid of all the problem occurring due to this dosha and live happily.',
            about: 'Brihaspati the ruler of all planets, is responsible for intelligence, wisdom, religion, knowledge. Weak Guru brings unhappiness and all evil effects.  All the malefic effects of the Guru Graha dosha can be overcome by performing this japam.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Ketu Graha Japam',
            description: 'Ketu is the remaining body part of the Asura Rahu. Ketu Graha represents the implementation of good and bad karmic accumulation. It signifies spirituality, enlightenment, corruption, dividedness etc.  A malefic or wrongly placed ketu in our horoscope can be harsh and cruel. By performing this Japam or Ketu Graha Shanti one attain all the positive results from ketu.`Ketu Graha Japam is performed by invoking ketu and chanting mantras for Ketu to please the graha as per the shastras to get rid of the entire problem occurring due to this dosha.',
            about: 'People afflicted by malefic ketu suffers from theft, putra dosha, absent mindedness and loss of property. All the bad effects of the Ketu Graha dosha can be overcome by performing this japam.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Mangal Graha Japam',
            description: 'Mangal graha shanti japam is performed for Mars planet. Kuja dosha, Angarakha dosha these are the different name of Mangal Dosha. If the mars planet is in any of the 1st, 4th, 7th, 8th and 12th houses then it causes this dosha and the person is called as Manglik. This planet rules over the muscles, bone marrow and blood. If Mangal dosha is present it causes effects like blood clotting and many problems related to blood.`Mangal Graha Japam is performed by invoking Mangal and chanting mantras for Mars to please the Graha and the japam is performed as per the shastras to get rid of all the problem occurring due to this dosha.',
            about: 'When Mars is in a deliberated state in the horoscope, then it brings all evil effects. All the malefic effects of the Mangal Graha dosha can be overcome by performing this Japam.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Mrityunjaya Japam',
            description: 'Mrityunjaya Japam is dedicated to Shiva Devudu to relieve from very serious illness or avoid untimely death. This japam is performed to achieve Jaya or Victory over Mrityu or death.`Mrityunjaya Japam is performed by invoking Shiva Devudu in the Mahakaal form, followed by the chanting of Maha Mrityunjaya Mantra for Longevity of Life.',
            about: 'Mrityunjaya japam is dedicated to Shiva devudu. Performing this japam reduces the process of death and rejuvenates the person who is fighting against death or disease.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 20000,
            imageId: ''
        },
        {
            name: 'Nakshatra Japam',
            description: 'There are total of 27 Nakshatras. We fall under the influence of different Nakshatras depending on the Rashi we are born under and the time of our birth.`There are 7 evil Nakshatras, they are Ashwini, Arudra, Ashlesha, Magha, Jyeshta, Moola and Revati. If the person is born under any of these Nakshatras, then the japam or pooja for the god is performed who rules that Nakshatra.`Anyone can perform this japam for their Nakshatra as this Makes the lord of the nakshatra very happy and the person gets lots of blessing and all doshas are removed.`Nakshatra Japam is performed by invoking the God who rules the nakshatra of the person, then Mantras of that God are chanted as per the shastras to receive the blessings.',
            about: 'The Nakshatra Japam is performed to the God of Nakshatra, which falls under the Evil or inauspicious category. And the blessings of the god is taken to get rid of the negative effects caused by the nakshatra.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 22000,
            imageId: ''
        },
        {
            name: 'Navagraha Japam',
            description: 'The Navagrahas or the nine planets control every aspect of human’s life and it has the power to change a person’s life at any point in time. This japam is best for getting rid of the Graha doshas.`Navagraha Japam is performed by invoking all the Nava Grahas then Mantras of Navagrahas are chanted as per the shastras to receive the blessings all the nine grahas.',
            about: 'The Navagraha Japam is performed to all the nine Grahas or Planets. This japam is a powerful remedy for a person who has Graha Dosha present in their horoscope and keeps away bad luck and misfortune and better their quality of life.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 22000,
            imageId: ''
        },
        {
            name: 'Rahu Graha Japam',
            description: 'Rahu is a shadow planet, which signifies emotions, materialism, excitement, alertness, intelligence, destination, psychology etc. when Rahu Graha is malefic or wrongly placed then lots of misunderstanding and mental tensions occur and many health problems arise. Performing Rahu graha shanti japam helps in getting rid of the malefic effects of the planet.`Rahu Graha Japam is performed by invoking Rahu and chanting mantras for Rahu to please the Graha and the japam is performed as per the shastras and vidhana.',
            about: 'Rahu graha is associated with material manifestation and worldly desires. Rahu brings separations in family and lots of unwanted problems if its wrongly placed. All the malefic effects of the Rahu can be overcome by performing this Japam.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 18000,
            imageId: ''
        },
        {
            name: 'Shani Graha Japam',
            description: 'Shaneshwara is the son of Surya , his vehicle is crow. In our horoscope, Shani is considered a stern teacher he signifies discipline, asceticism, endeavor, judgement, truthfulness, yoga and religion. When this graha is malefic or wrongly placed than the person must go through lots of hardships and unhealthy life. This graha shanti japam should be performed to get rid of the bad effects and bring happiness in one’s life.`Shani Graha Japam is performed by invoking Shani and chanting mantras for Shani to please the Graha and the japam is performed as per the shastras and vidhana.',
            about: 'Shani signifies judgement, discipline, truthfulness in one’s life. Malefic Shani graha causes a lot of hurdles in one’s life. All the malefic effects of the Shani graha dosha can be overcome by performing this Japam.',
            timeInHrs: 2.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Shukra Graha Japam',
            description: 'Shukra Graha or Venus planet is the son Rishi Bhrigu and is responsible for providing all comforts in one’s life if in good alignment. This Graha is mainly responsible for Romance, Beauty, passion, luxury, etc.  If a person has Shukra dosha in their horoscope then it leads to loss of wealth, marital problems, loss of bodily luster.`Shukra Graha Japam is performed by invoking Shukra and chanting mantras for Shukra to please the Graha as per the shastras and vidhi.',
            about: 'Shukra graha governs the attributes like passion, beauty, love, marriage, sex etc. performing this Japam gives the person power to control their sense organs and enables the person to live a happy life full of love and bliss.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 14000,
            imageId: ''
        },
        {
            name: 'Surya Graha Japam',
            description: 'Surya or Sun is the God of Knowledge and excellence, also known as Suryanarayan, is the kindest among all planets. It’s very important to perform this Japam when sun is malefic or if sun is placed in 3rd, 6th, 8th or the 12th house of the horoscope to bring happy times in our life and lead a healthy life.`Surya Graha Japam is performed by invoking Surya and chanting mantras for Surya to please the Graha and the japam is performed as per the shastras.',
            about: 'Surya is responsible for increasing knowledge, strength, will-power, but when wrongly placed in our horoscope it gives malefic effects.  To overcome all these bad effects this Graha Shanti Japam should be performed.',
            timeInHrs: 1.5,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 16000,
            imageId: ''
        },
        {
            name: 'Samvatsarikam – First Year Ceremony – Brahmins',
            description: 'The Samvatsarikam Ceremony is to be performed at the end of the first year on the same thithi of the person who passed away. This ceremony has to be done along with 12th Masikam. The whole procedure takes 3 days and on 4th day Navagraha Homam is performed at the kartas place.',
            about: 'Samvatsarikam is the Four days program in which first three days Masikam, Vimokam and Prathama abdikam is performed and on 4th day Navagraha Shanti is performed, All the family members come together and the elder most son performs the Taddinam as the main Karta and Gives danam to the brahmins as per his shakti to get the blessings from the Pitrus.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Samvatsarikam – First Year Ceremony – Non Brahmins',
            description: '',
            about: 'Samvatsarikam is the First Year Taddinam performed on the same tithi on which the person passed away. all the family members come together and the elder most son perform the taddinam as a main Karta.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 15000,
            imageId: ''
        },
        {
            name: 'Taddinam',
            description: '',
            about: 'Taddinam or the Srardha Ceremony is offering food for your pithrus in the pithru loka and thus satisfying their atma enabling us to receive the blessings of the Pitrus. This Taddinam Ceremony can be done as Hiranya or it can be performed along with the homa.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 8000,
            imageId: ''
        },
        {
            name: 'Astrology Consultation- Telugu',
            description: 'Astrology is a science which involves the interaction of planetary energy with living beings and how the planets impact each and everyone’s lives. This shastra is very pure and it involves a high level of understanding and knowledge. Our Best Vedic astrologers will analyze your horoscope also known as Jatakam to find out all the yogas and dosh in it and will give you an accurate prediction and remedies to be performed to nullify any negative effects. We shall provide a phone horoscope consultation on a slot basis once booked online.`You can book a consultation for any problems related to business, Marriage, Childbirth, Higher Education, Relationship problems, Love Problems, Pitrudosh, Court case etc.',
            about: 'We provide Expert Consultation services by analyzing your horoscope and finding out if there are any afflicted planets creating problems or any negative dosha creating troubles in your life.',
            timeInHrs: 1.0,
            requiredThings: null,
            type: 'Both', // Online/ AtHome
            cost: 10000,
            imageId: ''
        }], {});

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Pujas', null, {});

    }
};



