import { useState } from 'react';
import PlaceholderImage from '../components/PlaceholderImage';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface District {
  id: number;
  name: string;
  imageCount: number;
  content: string;
}

const districts: District[] = [
  {
    id: 1,
    name: 'Chumnubri, Gorkha',
    imageCount: 3,
    content: `Province: Gandaki Province
Chumnubri is a high-mountain rural municipality in northern Gorkha District, surrounded by the dramatic landscapes of the Manaslu Himalayan region. Its settlements are scattered across steep mountain terrain, making travel between villages and access to larger towns difficult.
The region has a rich Himalayan cultural heritage, with Buddhist traditions, monasteries, local customs, and strong community relationships playing an important role in daily life. Families have traditionally depended on farming, livestock, local trade, tourism, and seasonal employment. Their knowledge of mountain life and their close connection to the natural environment are important parts of the area's identity and legacy.

Despite its cultural richness and natural beauty, Chumnubri faces significant geographical challenges. Steep trails, harsh winters, changing weather, landslides, and long distances from markets and service centres can make access to healthcare, education, transportation, and other essential services difficult. For children in some remote settlements, continuing their education may require considerable travel and sacrifice.
Tharlam Manjushree School has 2 young monks from Gorkha District, according to the current student records.`
  },
  {
    id: 2,
    name: 'Dolpo Buddha and Polde, Dolpa',
    imageCount: 3,
    content: `Dolpo Buddha Rural Municipality lies in the remote high Himalayan region of Dolpa District in north-western Nepal. Surrounded by dramatic mountain landscapes and high-altitude terrain, the area is known for its distinctive Tibetan-influenced culture and deep-rooted Buddhist traditions. Its remote settlements and unique way of life form an important part of Nepal's Himalayan heritage.
Life in Dolpo Buddha is closely connected to the natural environment. Depending on the location and season, families may rely on livestock herding, small-scale farming, local trade, and seasonal work. Buddhist monasteries, traditional architecture, local languages, cultural practices, and community knowledge continue to shape the region's identity and legacy. Generations of residents have developed ways of living that reflect the challenges and resources of the high mountains.

Despite its rich cultural heritage, Dolpo Buddha faces considerable geographical and educational challenges. High elevation, long winters, heavy snowfall in some areas, difficult mountain routes, and limited transport connections can make access to healthcare, education, markets, and other essential services challenging. The scattered settlements and harsh weather conditions can also make it difficult for children in some communities to continue their education without additional support.
Nevertheless, the people of Dolpo Buddha continue to preserve their cultural traditions and maintain their connection to their ancestral land. Their heritage reflects resilience, community cooperation, and a strong relationship with the Himalayan environment. For children growing up in this remote region, access to quality education can provide valuable opportunities while helping them maintain an appreciation for their cultural roots.
According to our current student records, 7 young monks in our monastery come from Dolpa District, representing different villages and communities.`
  },
  {
    id: 3,
    name: 'Lo-Ghekar Damodarkunda, Mustang',
    imageCount: 4,
    content: `Province: Gandaki Province
Lo-Ghekar Damodarkunda lies in the high-altitude region of Upper Mustang, known for its dry mountain landscapes, traditional villages, and rich Tibetan Buddhist heritage. Monasteries, ancient architecture, and local customs reflect the area's long cultural and spiritual history.
Families traditionally depend on livestock, farming suited to the dry climate, trade, tourism, and seasonal work. However, harsh winters, limited water, scattered settlements, and costly transportation can make daily life and access to education challenging.
Despite these difficulties, the people continue to preserve their cultural traditions and Buddhist heritage. For young monks from this region, education offers an opportunity to gain knowledge while carrying their cultural and spiritual values into the future.
According to our current student records, 2 young monks in our monastery come from Mustang District, representing local communities in the region.`
  },
  {
    id: 4,
    name: 'Helambu and Thakni, Sindhupalchok',
    imageCount: 4,
    content: `Province: Bagmati Province
Helambu is a beautiful Himalayan region known for its distinctive Hyolmo cultural identity, Buddhist monasteries, and rich traditions. The Hyolmo people have preserved their language, customs, festivals, and spiritual practices across generations, making the region an important part of Nepal's cultural heritage.
Agriculture and animal husbandry have traditionally supported local livelihoods, with families growing potatoes, maize, millet, and other crops and raising livestock. Tourism and seasonal work also provide opportunities for some households.
However, steep mountain terrain, difficult travel, and seasonal weather can affect access to schools, healthcare, and markets. The 2015 earthquake and the 2021 Melamchi flood also affected the wider region, damaging infrastructure and livelihoods.
Despite these challenges, Helambu's communities continue to preserve their cultural traditions while working toward better opportunities for future generations. Education helps young monks develop their knowledge while remaining connected to their Buddhist values and cultural roots.`
  },
  {
    id: 5,
    name: 'Naukunda, Rasuwa',
    imageCount: 4,
    content: `Province: Bagmati Province
Naukunda is a rural municipality in Rasuwa District, known for its hilly terrain, mountain landscapes, forests, and rivers. Its communities reflect the cultural diversity and traditions of Nepal's Himalayan region.
Agriculture and livestock raising are important sources of livelihood for many families, while some also depend on local trade and seasonal employment.
However, steep terrain, landslides, difficult roads, and seasonal weather can make transportation and access to education, healthcare, and other essential services challenging. The 2015 earthquake also caused significant damage across Rasuwa, affecting communities and infrastructure.
Despite these challenges, local communities continue to maintain their traditions and livelihoods while seeking better educational opportunities for future generations.`
  },
  {
    id: 6,
    name: 'Aamachhodingmo, Rasuwa',
    imageCount: 3,
    content: `Province: Bagmati Province
Aamachhodingmo lies in northern Rasuwa District and is known for its mountain landscapes, rich cultural traditions, and religious significance. The municipality takes its name from Parvati Kunda, an important local religious site, and includes communities such as Gatlang, Goljung, and Chilime. The area is also a gateway to trekking routes in the Langtang region.
Many families depend on livestock raising, including sheep and chauri, traditional farming, and seasonal work. The region is also known for its rivers and hydropower projects, which contribute to local development.
However, mountainous terrain, difficult transportation, and limited economic opportunities can create challenges for some households. Despite these difficulties, local communities continue to preserve their cultural heritage and traditions while seeking better opportunities for future generations.`
  },
  {
    id: 7,
    name: 'Bhotekoshi, Sindhupalchok',
    imageCount: 4,
    content: `Province: Bagmati Province
Bhotekoshi is a mountainous rural municipality in northern Sindhupalchok, bordering China's Tibet Autonomous Region. Its steep hills, river valleys, and Himalayan landscapes shape the lives and livelihoods of local communities.
The area has a rich cultural heritage, with Buddhist monasteries, traditional religious sites, and communities including Sherpa and Tamang people. Farming land is limited, so many families depend on livestock raising, trade, employment, and seasonal work. The Araniko Highway and Tatopani border crossing have also made the area important for trade between Nepal and China.
However, steep terrain, limited cultivable land, and difficult travel can create challenges for families. Access to education and other essential services may be harder for people living in remote settlements.
Despite these challenges, Bhotekoshi's communities continue to preserve their cultural traditions and build opportunities for future generations.`
  },
  {
    id: 8,
    name: 'Chautara, Irkhu and surrounding communities, Sindhupalchok',
    imageCount: 2,
    content: `Province: Bagmati Province
Chautara Sangachokgadhi is home to the district headquarters of Sindhupalchok and includes both urban centres and rural settlements. Its communities reflect a rich mix of cultural traditions, languages, and religious practices. Agriculture, local trade, public services, and small businesses contribute to the local economy.
 The municipality is part of the historically and culturally diverse Sindhupalchok region, where farming traditions, local festivals, religious practices, and community relationships have shaped everyday life for generations. Its role as the district headquarters also makes Chautara an important centre for administration, education, and public services.
 The 2015 earthquake severely affected Sindhupalchok, damaging homes, schools, roads, and other infrastructure. Although reconstruction has improved many facilities, geographical difficulties, landslide risks, and differences in access to services between urban and remote settlements can still affect families. Ensuring that children from rural communities have continued access to quality education remains important for the region's future.`
  },
  {
    id: 9,
    name: 'Indrawati and Bhotsipa-area communities, Sindhupalchok',
    imageCount: 2,
    content: `Province: Bagmati Province
The Indrawati region of Sindhupalchok is characterised by green hills, river valleys, agricultural land, and scattered rural settlements. Communities in this area have a strong connection to farming, local traditions, and community life. Agriculture, livestock raising, small businesses, and seasonal employment contribute to household livelihoods.
The region's identity is shaped by its rural heritage, traditional farming practices, local festivals, and diverse cultural and religious traditions. The Indrawati River has long been an important natural feature of the area, supporting agriculture and influencing settlement patterns. Families continue to pass down local knowledge and customs through generations.
Steep terrain, landslides, and difficult road conditions can affect transportation and access to schools, healthcare, and markets, particularly in more remote settlements. The 2015 earthquake also caused significant damage across Sindhupalchok, affecting homes and public infrastructure. Continued investment in education, transportation, and local services is important for improving opportunities for children and families.`
  },
  {
    id: 10,
    name: 'Khanikhola, Kavrepalanchok',
    imageCount: 4,
    content: `Province: Bagmati Province
Khanikhola is a rural municipality in the southern part of Kavrepalanchok District, characterised by rolling hills, rural settlements, and agricultural landscapes. Many families depend on farming, livestock raising, local trade, and seasonal employment for their livelihoods.
Khanikhola has a strong rural heritage shaped by traditional farming, local customs, religious practices, and community relationships. Its diverse communities continue to preserve their cultural traditions and pass local knowledge from one generation to the next.
Hilly terrain, scattered settlements, and difficult road conditions can make travel and access to education, healthcare, and markets challenging, especially during the rainy season. Limited local employment opportunities may also lead some people to seek work elsewhere. Improving access to education and essential services remains important for supporting children and families in the region.`
  },
  {
    id: 11,
    name: 'Mahabharat and other rural hill communities of Kavrepalanchok',
    imageCount: 2,
    content: `Province: Bagmati Province
Mahabharat and the surrounding rural hill communities of Kavrepalanchok are characterised by forested hills, terraced farmland, and scattered settlements. Many families depend on agriculture, livestock raising, local trade, and seasonal employment for their livelihoods.
 These communities have a rich rural heritage shaped by traditional farming, local festivals, religious practices, and close community relationships. People from different cultural backgrounds contribute to the region's diversity, preserving local customs and passing traditional knowledge from one generation to the next.
 Steep terrain, scattered settlements, and difficult road conditions can make access to schools, healthcare, markets, and employment opportunities challenging, particularly during the monsoon season. Limited local opportunities may also encourage young people to seek education or work elsewhere. Improving access to quality education and essential services is important for supporting children and families in these rural communities.`
  },
  {
    id: 12,
    name: 'Raksirang, Makwanpur',
    imageCount: 2,
    content: `Province: Bagmati Province
Raksirang is a rural municipality in Makwanpur District, known for its green hills, scattered settlements, and rich cultural diversity. The area is home to significant Chepang and Tamang communities, whose traditions, languages, and local knowledge contribute to the region's identity.
 Raksirang has a strong rural heritage shaped by traditional farming, forest resources, local customs, and community life. The Chepang people, in particular, have a distinctive cultural identity and a long-standing relationship with the surrounding forests and hills. Their traditional knowledge and way of life form an important part of the area's heritage.
Many families face difficulties related to limited livelihood opportunities, challenging roads, and access to education, healthcare, and other essential services. For children in remote settlements, continuing their education can be particularly challenging because of distance and household financial constraints. Improving educational opportunities and basic services is important for supporting local communities and future generations.`
  },
  {
    id: 13,
    name: 'Thaha and Aagra, Makwanpur',
    imageCount: 2,
    content: `Province: Bagmati Province
Thaha and Aagra are located in the hill region of Makwanpur District, known for their green landscapes, terraced fields, and rural communities. Agriculture and livestock raising are important sources of livelihood, while local trade and seasonal employment also support some households.
 Thaha is known for its agricultural traditions, scenic hills, and diverse rural communities. Aagra and its surrounding settlements reflect the traditional lifestyle of the Makwanpur hills, where farming, local customs, religious practices, and strong community ties have shaped everyday life for generations.
 Hilly terrain, scattered settlements, and difficult road conditions can affect access to schools, healthcare, markets, and employment opportunities. Seasonal weather and limited local resources may create additional challenges for families in remote areas. Access to quality education is especially important in helping children build a stronger future while remaining connected to their cultural roots.`
  },
  {
    id: 14,
    name: 'Thakre, Dhading',
    imageCount: 3,
    content: `Province: Bagmati Province
Thakre is a rural municipality in Dhading District, located in the mid-hill region of Nepal. Its landscape includes green hills, agricultural land, rivers, and rural settlements. Agriculture, livestock raising, local trade, and wage employment contribute to the livelihoods of many families.
Thakre has a rural heritage shaped by farming traditions, local customs, religious practices, and community relationships. Its location along the Prithvi Highway has also contributed to transportation, trade, and connections with nearby towns.
 Although Thakre has road connections to major settlements, access to education, healthcare, and employment can vary between communities. Landslides, difficult rural roads, and seasonal weather may affect transportation, while limited local opportunities can lead some young people to seek education or work elsewhere. Continued investment in education and essential services is important for the well-being of local families.`
  },
  {
    id: 15,
    name: 'Nijgadh and the Ramthali–Barajila area, Bara',
    imageCount: 3,
    content: `Province: Madhesh Province
Nijgadh lies in Bara District in the southern plains of Nepal, near the Chure hills and the Terai forests. The area connects agricultural communities with growing towns and transport routes. Farming, livestock raising, local businesses, and wage employment are important sources of livelihood for many families.
 Nijgadh and its surrounding communities have a rural heritage shaped by agriculture, local customs, religious traditions, and close community relationships. The wider area reflects the cultural diversity of the Terai, where different communities maintain their languages, festivals, and traditional ways of life.
 Families may face challenges related to employment, household income, access to quality education, and healthcare, particularly in more rural settlements. Seasonal flooding, extreme heat, and pressure on forest resources can also affect livelihoods in parts of the region. Improving educational opportunities and essential services remains important for supporting children and families.`
  },
  {
    id: 16,
    name: 'Thabang, Rolpa',
    imageCount: 1,
    content: `Province: Lumbini Province
Thabang is a historic mountain settlement in Rolpa District, known for its distinctive Magar cultural heritage, traditional village life, and strong community identity. Surrounded by hills and rugged landscapes, the area reflects the traditions and resilience of Nepal's mid-western hill communities.
 Thabang has a significant place in Nepal's modern political history and is widely associated with the Maoist insurgency. Alongside this history, local communities have maintained their cultural traditions, customary practices, and strong ties to their ancestral land. Agriculture, livestock raising, and local labour have traditionally supported many households.
 Rugged terrain, remote settlements, and difficult transportation can limit access to education, healthcare, markets, and employment opportunities. Some families also face financial challenges in supporting children's continued education. Improving access to quality education and essential services is important for creating better opportunities for future generations.`
  },
  {
    id: 17,
    name: 'Putha Uttarganga and Hukam, Rukum East',
    imageCount: 2,
    content: `Province: Lumbini Province
Putha Uttarganga Rural Municipality lies in the mountainous region of Rukum East, surrounded by rugged hills, deep valleys, forests, and the Himalayan landscape. The area is home to communities with rich Magar cultural traditions and a strong connection to their ancestral land.
 The region's identity is shaped by traditional farming, livestock raising, local customs, and community relationships. Magar languages, festivals, religious practices, and traditional knowledge remain important parts of local heritage. Life in these mountain communities has long been influenced by the surrounding environment and seasonal conditions.
Remote settlements, steep mountain trails, difficult roads, and harsh weather can make access to schools, healthcare, markets, and other essential services challenging. Limited employment opportunities and long travel distances may also affect children's ability to continue their education. Improving access to quality education and basic services is important for supporting families and creating opportunities for future generations.`
  },
  {
    id: 18,
    name: 'Sani Bheri, Rukum West',
    imageCount: 2,
    content: `Province: Karnali Province
Sani Bheri is a rural municipality in Rukum West, surrounded by green hills, river valleys, and mountainous landscapes. Its communities have a strong rural heritage, with agriculture, livestock raising, and local employment supporting many households.
 The area's identity is shaped by traditional farming, local customs, religious practices, and close community relationships. The cultural traditions and local knowledge passed down through generations remain important parts of everyday life.
 Mountainous terrain, scattered settlements, and difficult roads can make access to schools, healthcare, markets, and employment opportunities challenging, particularly in remote villages. Seasonal weather and limited local resources may add to these difficulties. Access to quality education and essential services is important for supporting children and creating better opportunities for future generations.`
  },
  {
    id: 19,
    name: 'Khijidemba and the Themathang area, Okhaldhunga',
    imageCount: 3,
    content: `Province: Koshi Province
Khijidemba is a rural municipality in Okhaldhunga District, in the hilly region of eastern Nepal. Its landscape includes forested hills, terraced farmland, and scattered settlements. Agriculture, livestock raising, and seasonal employment are important sources of livelihood for many families.
 The region has a rich rural heritage shaped by traditional farming, local languages, religious practices, and community customs. Different ethnic communities contribute to the area's cultural diversity, preserving their traditions and local knowledge across generations.
 Steep terrain, scattered settlements, and difficult road conditions can make access to schools, healthcare, markets, and employment challenging, especially during the monsoon season. Limited local opportunities may also make it difficult for young people to continue their education close to home.`
  },
  {
    id: 20,
    name: 'Likhu and Pokali, Okhaldhunga',
    imageCount: 3,
    content: `Province: Koshi Province
Likhu Rural Municipality lies in Okhaldhunga District, eastern Nepal, where hills, agricultural land, and rural settlements shape everyday life. Pokali is known for Pokali Waterfall, a notable natural attraction in the region.
 The area has a rural heritage shaped by farming, local customs, religious traditions, and community life. Agriculture and livestock raising remain important sources of livelihood for many families.
Hilly terrain, difficult transportation, and distance from essential services can make access to education, healthcare, and employment challenging for some rural households. Providing children with opportunities for continued education is important for their future.`
  },
  {
    id: 21,
    name: 'Kakani and Jiling, Nuwakot',
    imageCount: 2,
    content: `Province: Bagmati Province
Kakani and Jiling are associated with the hill landscapes of central Nepal, where green hills, terraced farmland, and rural settlements shape everyday life. Agriculture, livestock raising, and local trade are important sources of livelihood for many families.
 The area's rural heritage is reflected in traditional farming practices, local customs, religious traditions, and strong community relationships. Families continue to pass down their cultural knowledge and traditions across generations.
 Hilly terrain, scattered settlements, and difficult road conditions can affect access to schools, healthcare, markets, and employment opportunities, particularly in remote communities. Seasonal weather and limited local resources may also create challenges for families seeking better educational opportunities for their children.`
  },
  {
    id: 22,
    name: 'Chamaita, Ilam',
    imageCount: 3,
    content: `Province: Koshi Province
Chamaita is associated with the eastern hill region of Ilam, known for its green landscapes, fertile hills, and rich cultural diversity. Agriculture is an important source of livelihood, with families in the wider district cultivating tea, cardamom, and other crops depending on local conditions.
 The area's heritage is shaped by traditional farming, local customs, religious practices, and the cultural traditions of eastern Nepal's diverse communities. Family and community relationships remain important parts of rural life.
 Hilly terrain, scattered settlements, and difficult transportation can affect access to schools, healthcare, markets, and employment opportunities. Supporting continued education can help children from rural communities develop new opportunities while maintaining a connection to their cultural roots.`
  },
  {
    id: 23,
    name: 'Simkot, Humla',
    imageCount: 3,
    content: `Province: Karnali Province
Simkot is the district headquarters of Humla, a remote Himalayan district in north-western Nepal. Surrounded by rugged mountains and high-altitude landscapes, the area is known for its distinctive mountain culture and close connection to the natural environment.
 Simkot has long served as an important centre for local administration, trade, and services in Humla. Tibetan-influenced Buddhist traditions, local customs, and mountain lifestyles contribute to the region's cultural heritage. Agriculture and livestock raising remain important sources of livelihood for many families.
Remote geography, harsh winters, limited road connectivity, and high transportation costs can make access to education, healthcare, and essential supplies difficult. For children from distant settlements, continuing their education may require significant travel and family support. Improving educational opportunities is important for helping young people build a brighter future while preserving their cultural roots.`
  },
  {
    id: 24,
    name: 'Sankhu and Kageshwori Manohara, Kathmandu District',
    imageCount: 2,
    content: `Province: Bagmati Province
Sankhu and Kageshwori Manohara are located in the Kathmandu Valley and reflect a blend of traditional Newari heritage and modern urban development. Sankhu is an historic Newar settlement known for its traditional architecture, temples, festivals, and religious significance, while Kageshwori Manohara includes both growing residential areas and communities with longstanding cultural traditions.
 Sankhu has a rich history connected to Newar culture, traditional craftsmanship, and religious festivals. The wider Kageshwori Manohara area is also home to important cultural and religious sites, including Kageshwori Mahadev Temple. These traditions continue to shape community identity and local life.
Rapid urbanisation, increasing living costs, traffic, and pressure on local infrastructure can affect families in the area. Although access to schools and services is generally greater than in remote mountain regions, financial difficulties and unequal access to educational opportunities may still affect some households.`
  },
  {
    id: 25,
    name: 'Balara, Sarlahi',
    imageCount: 2,
    content: `Province: Madhesh Province
Balara is a municipality in Sarlahi District in Nepal's southern Terai plains. The area is characterised by flat agricultural land, rural settlements, and a diverse cultural heritage. Farming, livestock raising, local trade, and daily-wage employment support the livelihoods of many families.
 Balara's identity is shaped by the agricultural traditions, languages, festivals, and religious practices of the Madhesh region. Family and community relationships remain important parts of local life, with traditions passed down through generations.
 Some families face challenges related to household income, employment, and access to quality education and healthcare. Seasonal flooding, extreme summer heat, and limited resources can also affect daily life and agricultural livelihoods. Improving educational opportunities is important for helping children build a brighter future while staying connected to their cultural roots.`
  }
];

// Image Carousel Component
function ImageCarousel({ imageCount, districtName }: { imageCount: number; districtName: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageCount);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageCount) % imageCount);
  };

  if (imageCount === 1) {
    return (
      <PlaceholderImage
        label={`${districtName} - Image 1`}
        className="aspect-[4/3] w-full rounded-lg"
      />
    );
  }

  return (
    <div className="relative">
      <PlaceholderImage
        label={`${districtName} - Image ${currentImageIndex + 1}`}
        className="aspect-[4/3] w-full rounded-lg"
      />
      
      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
        {currentImageIndex + 1} / {imageCount}
      </div>
    </div>
  );
}

export default function StudentsDistrictsPage() {
  const [openDistrict, setOpenDistrict] = useState<number | null>(null);

  const toggleDistrict = (id: number) => {
    setOpenDistrict(openDistrict === id ? null : id);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-neutral-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-px bg-black" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Our Students</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                Our Students Come from<br />
                <span className="text-neutral-400">Different Districts Across Nepal</span>
              </h1>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                Tharlam Manjushree School is home to young monks from different parts of Nepal. According to our current records, our students come from 21 districts, with Sindhupalchok District contributing the largest number, with 18 students from different villages. Other students come from districts including Okhaldhunga, Dolpa, Kavrepalanchok, Makwanpur, and many others.
              </p>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mt-4">
                Each student brings a unique background, culture, and tradition from their home community. Together, they form a diverse monastic community united by education, Buddhist teachings, compassion, and wisdom.
              </p>
            </div>
            <div>
              <PlaceholderImage label="Our Students" className="aspect-[4/3] w-full rounded-2xl sm:rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] mb-12">
            Stories of the Villages of Our Young Monks
          </h2>

          <div className="space-y-3">
            {districts.map((district) => (
              <div key={district.id} className="border border-neutral-200 rounded-xl overflow-hidden">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleDistrict(district.id)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-neutral-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-xl sm:text-2xl font-bold text-neutral-300">
                      {String(district.id).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold">{district.name}</h3>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`transform transition-transform ${
                      openDistrict === district.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Accordion Content - Side by Side Layout */}
                {openDistrict === district.id && (
                  <div className="p-6 bg-neutral-50 border-t border-neutral-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                      {/* Text Column */}
                      <div className="order-2 lg:order-1">
                        <div className="prose prose-neutral max-w-none">
                          {district.content.split('\n\n').map((paragraph, idx) => (
                            <p key={idx} className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-4">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Image Column with Carousel */}
                      <div className="order-1 lg:order-2">
                        <ImageCarousel 
                          imageCount={district.imageCount} 
                          districtName={district.name} 
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
