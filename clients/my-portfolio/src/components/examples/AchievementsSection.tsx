import AchievementsSection from '../AchievementsSection';

export default function AchievementsSectionExample() {
  const achievements = [
    {
      id: 1,
      text: "Secured 513th rank in TCS CodeVita out of 444K+ participants from 94 countries",
      highlight: "513th rank"
    },
    {
      id: 2,
      text: "Earned a Knight badge on LeetCode, i.e becoming a part of Top 4% out of 300k+ candidates",
      highlight: "Knight badge"
    },
    {
      id: 3,
      text: "Solved 700+ problems on Leetcode (140+ easy, 350+ medium, 60+ hard)",
      highlight: "700+ problems"
    },
    {
      id: 4,
      text: "Achieved global ranking of 188 in Codechef February Cook-Off 2023 (Div 2) contest",
      highlight: "188 global rank"
    },
    {
      id: 5,
      text: "Secured a spot among the top 15 participants in the TextBase Titans Hackathon",
      highlight: "Top 15"
    },
    {
      id: 6,
      text: "Achieved all India rank 214 out of 1 lakh+ participants in Codekaze-Sep'23",
      highlight: "AIR 214"
    },
    {
      id: 7,
      text: "Achieved a 5 star rating in problem solving on HackerRank",
      highlight: "5 star"
    }
  ];

  return <AchievementsSection achievements={achievements} />;
}
