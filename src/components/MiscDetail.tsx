import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import TrapBackground from './TrapBackground';
import PageNav from './PageNav';
import ContentContainer from './ContentContainer';
import ContactInfoNav from './ContactInfoNav';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #e0e0e0;
`;

const PageTitle = styled(motion.h1)`
  font-size: 36px;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const DetailContent = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: #444;
  padding: 0;
  margin-bottom: 1rem;
  width: 100%;
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(51, 51, 51, 0.5);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(51, 51, 51, 0.7);
  }
  
  p {
    margin-bottom: 1.5rem;
    white-space: pre-line;
  }
  
  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const ImageContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TopicImage = styled.img`
  width: 80%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ImageCaption = styled.p`
  font-size: 14px;
  color: #666;
  font-style: italic;
  text-align: center;
  margin-top: 0.5rem;
`;

const BackButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(51, 51, 51, 0.9);
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  z-index: 20;
  
  &:hover {
    background: rgba(51, 51, 51, 1);
  }
`;

const JokeBox = styled.div`
  background: rgba(240, 248, 255, 0.9);
  border-left: 4px solid #333333;
  padding: 1rem;
  margin: 1.5rem 0;
  font-style: italic;
`;

// Animation variants
const contentVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const titleVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Topic data
const topicsData = {
  'ion-trap-humor': {
    title: 'Lighter Side of Quantum Physics',
    description: `Quantum physics may be a serious scientific endeavor, but that doesn't mean we can't find humor in the daily life of quantum researchers.

The quantum physics lab is a place where the unexpected becomes routine. Laser systems mysteriously drift out of alignment minutes before an important demonstration. Quantum states decohere just as you're about to measure them. And let's not forget the classic "the vacuum chamber was perfect until we tried to use it" scenario.

Then there's the challenge of explaining your research to non-physicists at family gatherings. "So you trap... atoms? With light? And they're in two places at once? Maybe I'll just tell Grandma you work with computers."

Even the terminology of quantum physics lends itself to humor. We talk about excited states, forbidden transitions, and quantum jumps - all terms that could just as easily apply to a reality TV show as cutting-edge science.`,
    closingText: 'This page will continue to be updated with more interesting comics about quantum physics.',
    images: [
      {
        src: '/images/joke1.png',
        caption: 'Encountering bosons'
      },
      {
        src: '/images/joke2.png',
        caption: 'Schrodinger\'s cat meme - both laughing and not laughing at quantum physics jokes'
      },
      {
        src: '/images/joke3.jpg',
        caption: 'Helium and alpha particles'
      }
    ],
    /* Commented out for future use
    keyPoints: [
      'The universal experience of unexpected lab equipment failures',
      'The challenge of explaining quantum concepts to non-specialists',
      'The peculiar language of quantum physics that creates natural wordplay',
      'Finding humor in the philosophical implications of quantum mechanics',
      'Celebrating the unique culture of physics research'
    ],
    jokes: [
      "I told my date I work with trapped ions. She said she felt a strong attraction but we had too much potential difference.",
      "Schrödinger's grad student: simultaneously awake and asleep until observed by their advisor.",
      "What's a quantum physicist's favorite dance? The spin-flip!",
      "Why don't quantum physicists make good comedians? Their jokes exist in a superposition of funny and not funny until you observe them.",
      "What did the quantum computer say to the classical computer? 'I can solve your problems in parallel universes!'"
    ]
    */
  },
  'origami': {
    title: 'Origami: The Art of Paper Folding',
    description: `Origami, the traditional Japanese art of paper folding, has evolved from simple paper cranes to complex mathematical structures and engineering applications. What started as a cultural tradition has become a fascinating intersection of art, mathematics, and science.

The beauty of origami lies in its simplicity - starting with a single sheet of paper and creating intricate designs through a series of precise folds. This process has inspired mathematicians to study the underlying geometry and has led to applications in fields ranging from space engineering to medical devices.

Modern origami artists and mathematicians have developed sophisticated techniques for creating complex structures, from realistic animals to geometric patterns. The mathematical principles behind origami have even found applications in designing deployable structures for space missions and stents for medical use.`,
    closingText: 'This page will continue to be updated with more of my origami projects.',
    images: [
      {
        src: '/images/origami1.jpg',
        caption: 'A complex origami dragon created from a single sheet of paper'
      },
      {
        src: '/images/origami2.jpg',
        caption: 'Geometric origami patterns demonstrating mathematical principles'
      },
      {
        src: '/images/origami3.jpg',
        caption: 'Traditional origami crane with modern interpretation'
      }
    ],
    /* Commented out for future use
    keyPoints: [
      'Origami combines artistic expression with mathematical precision',
      'Modern applications in engineering and medical devices',
      'The role of origami in space technology and deployable structures',
      'Mathematical principles behind paper folding',
      'Cultural significance and evolution of the art form'
    ],
    jokes: [
      "Why did the origami artist go to therapy? They had too many folded emotions!",
      "What's an origami artist's favorite type of music? Paper jam!",
      "How many origami artists does it take to fold a paper crane? Just one, but they need infinite patience!",
      "What did the origami paper say to the scissors? 'I'm feeling a bit creased today.'",
      "Why did the mathematician love origami? Because it's all about the angles!"
    ]
    */
  }
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0 1rem;
`;

const TextContent = styled.div`
  width: 100%;
  min-width: 0;
`;

const ImageSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  align-items: center;
`;

const MiscDetail: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  
  // Default to first topic if topicId is invalid
  const topicData = topicId && topicsData[topicId as keyof typeof topicsData] 
    ? topicsData[topicId as keyof typeof topicsData]
    : Object.values(topicsData)[0];
  
  return (
    <Container>
      <TrapBackground tintColor="rgba(100, 0, 255, 0.03)" />
      <PageNav currentPage="Misc" />
      <ContactInfoNav />
      
      <BackButton 
        onClick={() => navigate('/misc')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Misc
      </BackButton>
      
      <ContentContainer
        width="90%"
        height="80%"
        initial="initial"
        animate="animate"
        variants={contentVariants}
        overflow="hidden"
      >
        <PageTitle variants={titleVariants}>{topicData.title}</PageTitle>
        
        <ContentWrapper>
          <TextContent>
            <DetailContent>
              <p>{topicData.description}</p>
              
              {/* Key Points section commented out
              <h2>Key Points</h2>
              <ul>
                {topicData.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              */}
              
              {/* Jokes section commented out
              <h2>A Little Humor</h2>
              {topicData.jokes.map((joke, index) => (
                <JokeBox key={index}>
                  {joke}
                </JokeBox>
              ))}
              */}
              
              <p>
                {topicData.closingText}
              </p>
            </DetailContent>
          </TextContent>

          <ImageSection>
            {topicData.images.map((image, index) => (
              <React.Fragment key={index}>
                <TopicImage src={image.src} alt={image.caption} />
                <ImageCaption>{image.caption}</ImageCaption>
              </React.Fragment>
            ))}
          </ImageSection>
        </ContentWrapper>
      </ContentContainer>
    </Container>
  );
};

export default MiscDetail; 