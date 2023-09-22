import Vue from 'vue'
import Vuex from 'vuex'
import { Set } from 'core-js/internals/set-helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testState: [],
    allArticles: [
      {
        id: 1,
        header: 'Let’s Get Solution For Building Construction Work #1',
        img: 'img/article-1.png',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 2,
        img: 'img/article-2.png',
        header: 'Let’s Get Solution For Building Construction Work #2',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 3,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #3',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 4,
        img: 'img/article-1.png',
        header: 'Let’s Get Solution For Building Construction Work #4',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 5,
        img: 'img/article-2.png',
        header: 'Let’s Get Solution For Building Construction Work #5',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 6,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #6',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 7,
        img: 'img/article-1.png',
        header: 'Let’s Get Solution For Building Construction Work #7',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 8,
        img: 'img/article-2.png',
        header: 'Let’s Get Solution For Building Construction Work #9',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 9,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #9',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 10,
        img: 'img/article-1.png',
        header: 'Let’s Get Solution For Building Construction Work #10',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 11,
        img: 'img/article-2.png',
        header: 'Let’s Get Solution For Building Construction Work #11',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 12,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #12',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 13,
        img: 'img/article-1.png',
        header: 'Let’s Get Solution For Building Construction Work #13',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 14,
        img: 'img/article-2.png',
        header: 'Let’s Get Solution For Building Construction Work #14',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 15,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #15',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 16,
        img: 'img/article-1.png',
        header: 'Let’s Get Solution For Building Construction Work #16',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 17,
        img: 'img/article-2.png',
        header: 'Let’s Get Solution For Building Construction Work #17',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 18,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #18',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 19,
        img: 'img/article-1.png',
        header: 'Let’s Get Solution For Building Construction Work #19',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 20,
        img: 'img/article-2.png',
        header: 'Let’s Get Solution For Building Construction Work #20',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 21,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #21',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 22,
        img: 'img/article-1.png',
        header: 'Let’s Get Solution For Building Construction Work #22',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 23,
        img: 'img/article-2.png',
        header: 'Let’s Get Solution For Building Construction Work #23',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 24,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #24',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      },

      {
        id: 25,
        img: 'img/article-3.png',
        header: 'Let’s Get Solution For Building Construction Work #25',
        date: '26 December,2022',
        badge: 'Kitchan Design',
        crumbs: 'Interior / Home / Decore',
        textMini: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
          '\n' +
          'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
        text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
          '\n' +
          'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
        tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
        detailsHeader: '#1 Design sprints are great',
        detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
          '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '\n' +
          '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
          '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
        detailsImg: 'img/details-sub.png',
        detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
      }
    ],
    mainMenu: [
      {
        name: 'Home',
        href: '/'
      },
      {
        name: 'Project',
        href: '/project'
      },
      {
        name: 'Blog',
        href: '/blog'
      }
    ],
    projects: [
      {
        id: 1,
        header: 'Minimal Bedroom',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-1.png',
        tags: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 2,
        header: 'Classic Minimal Bedroom',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-3.png',
        tags: ['Bathroom', 'Bed Room', 'Kitchan'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 3,
        header: 'Minimal Bedroom table',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-5.png',
        tags: ['Bed Room', 'Kitchan', 'Living Area'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 4,
        header: 'Modern Medroom',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-7.png',
        tags: ['Kitchan', 'Living Area'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 5,
        header: 'Minimal Bedroom',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-2.png',
        tags: ['Bathroom', 'Bed Room'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 6,
        header: 'Modern Bedroom',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-4.png',
        tags: ['Living Area'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 7,
        header: 'System Table',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-6.png',
        tags: ['Bathroom'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 8,
        header: 'Modern Bedroom',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-8.png',
        tags: ['Bed Room'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 9,
        header: 'Minimal Bedroom',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-1.png',
        tags: ['Kitchan'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 10,
        header: 'Classic Minimal Bedroom',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-3.png',
        tags: ['Living Area'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 11,
        header: 'Minimal Bedroom table',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-5.png',
        tags: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 12,
        header: 'Modern Medroom',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-7.png',
        tags: ['Bed Room', 'Kitchan', 'Living Area'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 13,
        header: 'Minimal Bedroom',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-2.png',
        tags: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 14,
        header: 'Modern Bedroom',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-4.png',
        tags: ['Bathroom', 'Living Area'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 15,
        header: 'System Table',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-6.png',
        tags: ['Bathroom', 'Bed Room'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 16,
        header: 'Modern Bedroom',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-8.png',
        tags: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 17,
        header: 'Minimal Bedroom table',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-5.png',
        tags: ['Bathroom', 'Living Area'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 18,
        header: 'Modern Medroom',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-7.png',
        tags: ['Bathroom', 'Bed Room'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 19,
        header: 'Minimal Bedroom',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-2.png',
        tags: ['Bathroom', 'Bed Room', 'Living Area'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 20,
        header: 'Modern Bedroom',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-4.png',
        tags: ['Bathroom'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 21,
        header: 'System Table',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-6.png',
        tags: ['Bathroom', 'Kitchan'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      },
      {
        id: 22,
        header: 'Modern Bedroom',
        crumbs: 'Decor / Artchitecture',
        imgProject: 'img/project-8.png',
        tags: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin ' +
          'tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. ' +
          'Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. ' +
          'Aenean in the ipsum vel lectus bibendum commodo. ' +
          'In nec sem suscipit, convallis leo vitae, lacinia nibh. ' +
          'Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, ' +
          'pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,' +
          'elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. ' +
          'Proin tincidunt ligula id purus porttitor.',
        images: [
          {
            id: 1,
            src: 'img/project-1-1.png'
          },
          {
            id: 2,
            src: 'img/project-1-2.png'
          },
          {
            id: 3,
            src: 'img/project-1-3.png'
          }
        ]
      }
    ]
  },
  getters: {
    getMainMenu: state => {
      return state.mainMenu
    },
    getAllArticles: state => {
      return state.allArticles
    },
    getAllArticlesLength: state => {
      return state.allArticles.length
    },
    getLastPost: state => {
      return state.allArticles[0]
    },
    getThreePosts: state => {
      return state.allArticles.slice(0, 3)
    },
    getArticleById: (state) => (id) => {
      return state.allArticles.find(article => article.id === Number(id))
    },
    getProjects: state => {
      return state.projects
    },
    getFourProjects: state => {
      return state.projects.slice(0, 4)
    },
    getProjectById: (state) => (id) => {
      return state.projects.find(project => project.id === Number(id))
    },
    getProjectByTag: (state) => (tag) => {
      return state.projects.filter((project) => {
        if (tag === '') {
          return state.projects.slice(0, 6)
        } else {
          return project.tags.includes(tag)
        }
      })
    },
    getProjectsTags: state => {
      const tags = []
      state.projects.forEach((el) => {
        tags.push(...el.tags)
      })
      return new Set(tags)
    }
  },
  mutations: {
    addElementToTestState (state, element) {
      this.state.testState.push(element)
    }
  },
  actions: {
    addElement ({ commit }) {
      commit('addElementToTestState')
    }
  },
  modules: {
  }
})
