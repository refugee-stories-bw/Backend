
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {id: 1, name: 'On Song', title: 'My Story', isapproved: true, story: 'On Song lived a good childhood in an upper-class family, attending special schools reserved for people of her social class and nurturing dreams of becoming a doctor or scientist. After her parents shut those dreams down because they felt they were improper for a girl, she instead became an accountant and worked for a special division of the government for several years. However, once her father retired and his salary and benefits stopped, life immediately took a turn for the worse. It was difficult for her mother to adjust to their new economic situation, and she soon fell seriously ill and passed away.'},
        {id: 2, name: 'Moo Chan', title: 'My Story', isapproved: true, story: 'One day he was in China doing business when he was arrested. He was repatriated and sat in prison for two months before being released. It was then that he truly realized that life was hopeless in North Korea and started to think about joining his resettled family members and good friends in the South. He wanted to be with them more than anything, so he escaped.'},
        {id: 3, name: 'Yoon Ha', title: 'My Story', isapproved: true, story: 'In North Korea, the police oppressed me, keeping me from doing what I needed to do to survive. And in China, the police were trying to find North Korean refugees who were living in hiding. They wanted to send us back to North Korea, even though they knew we would be brutally punished by the regime. Whenever the police came around, I locked all the doors and hid in fear until they left town. So at first, I was scared of the police in South Korea.'}
      ]);
    });
};
