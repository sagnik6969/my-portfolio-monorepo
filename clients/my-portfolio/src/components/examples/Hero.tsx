import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero 
      onAskAI={() => console.log('Ask AI clicked')} 
      onDownloadResume={() => console.log('Download resume clicked')} 
    />
  );
}
