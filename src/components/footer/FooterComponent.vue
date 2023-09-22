<template>
  <div class="footer center">
    <div class="footer-content">
      <div class="footer-content-company">
        <logo-component :logo="logo" />
        <div class="footer-content-company-info">
          <p class="footer-content-company-info__text">
            It is a long established fact that a reader will be distracted lookings.
          </p>
        </div>
        <div class="footer-content-company-socials">
          <div class="footer-content-company-socials__icon">
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z" fill="#292F36"/>
            </svg>
          </div>
          <div class="footer-content-company-socials__icon">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z" fill="#292F36"/>
            </svg>
          </div>
        </div>
      </div>
      <MenuComponent @MenuElement="chooseElement" :menu="menu" :direction="direction" :header="header"/>
      <div class="footer-content-contacts">
        <p class="footer-content-contacts__header">Contact</p>
        <p class="footer-content-contacts__attributes">55 East Birchwood Ave. Brooklyn, New York 11201</p>
        <p class="footer-content-contacts__attributes">contact@interno.com</p>
        <p class="footer-content-contacts__attributes">(123) 456 - 7890</p>
      </div>
    </div>
  </div>
</template>

<script>
import MenuComponent from '@/components/menu/MenuComponent.vue'
import LogoComponent from '@/components/header/LogoComponent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'FooterComponent',
  data () {
    return {
      direction: 'column',
      header: 'Pages',
      menu: [],
      logo: {
        header: 'Interno',
        href: '#',
        img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAiACIDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/igDgPiP8T/BPwn8OT+KPHWt2+j6bGfKtozmbUNTujjZZaVp8W65v7tshmSBCkEW+5upILWKWdPJznPMsyDByx2aYqGHor3YR+KtXqdKWHox9+rUd7tRVoRvOo4QjKS9PKsozDOsVHB5dh5V6r1m/hpUYdalaq/cpwXRyd5O0IKU2ov8nPix/wAFB/iJ4mmutO+GGn2/gLQz5kUWqXcVtq/iu6jJAEzPOk2k6SXjBH2e1tr6e3Zi0WquwR1/Ac/8Xc4xsp0cjowynC6xjXqRhiMfUV/ibkpYfD3X2IQqzg23HEPRr9oyXwxyvCRhVzerLMsRo3RhKdDBQf8AKlFxr1rP7U504yS1orVP4r8R/Ej4g+MJnn8U+N/FfiCSRtxGr6/ql9Enz7wsME908EESNzHDBHHFHgCNFAAH5pjc6zfMZOePzTH4tt3/ANoxderFa3tGE5uMIp7RilFdEj7/AAuVZZgYqODy/BYVL/nxhqNNvS15SjBSk2t5Sbk+rZxVeYegf02fE/4j+HvhP4H13x14mm2ado1tuitkYC61TUZ2EOnaTYrhi13qF00cCNtMdvGZby5MdpbXEsf9uZ5nODyDK8VmuOlajhoXjBP95XrSfLRw9Ja3qVajUU7WguapO1OE5L+SMnyrFZ1mOGy7CRvVrztKbXuUaUfeq16j0tClBOTV05O1OF5zin/PT8YvjF4w+NnjC68WeLLr+/b6Lotu7/2X4f0veWi0/T4mP0e7u3H2i+uMzzn/AFccf8g8RcRZjxNmNTMMwqd4YbDQb9hhKF7xo0Yv76lR+/VneUnsl/T2RZFgeH8DDBYKHaVevJL22JrWtKrVkvuhBe7TjaMVu35TXgnshQAUAfoT/wAFBvi3ceJ/iHZfC7Trk/2D4Bigu9VijcmK88WarZrO0kmBsk/sjSLqCzgILNb3N7q8LEMzIv694u8QTx2cUsioz/2TKYxqV4p+7UzCvTU230l9Xw84U4dYTq4iL1dl+Y+GWSRwmV1M4qw/2nMpShRbWtPBUajikuq9vXhKcukoU6Elok38W/Dr4eeJ/in4v0nwR4QtI7vW9XeURfaJhbWdrb20L3N5fX1yVfyLS0t45JpWVJJXwsNtDPcywwSfmuTZPjs9zHD5Xl1ONTFYhy5eeXJTpwhFzqVas7Plp04RcpNKUnZRhGc5Ri/vs0zTB5Nga+YY6bhh6CjzcseepOU5KFOnThpzTnNqMU2orWU5RgpSXpPxx/Zt+IfwCfRZPF76JqWma950dhrPh27u7vT/ALbbIklxp9wL+w0y8t7pI3E0W+18i4h3PBM7xXEUHs8UcF5xwm8M8weGrUMVzRpYnB1KlSj7WCTnRn7WlQqQqJPmjenyzjdxk3GcY+Tw9xXlfEqxCwKxFKthuV1cPioQhV9nNtRqx9lVqwlBtcrtPmhKylFKUHL5/r5I+mCgDs/iN4im8W/EDxv4ouHZ5fEHivxBq5LHO1L/AFS6uIolxwI4YpEhjVflSNFRQFUCvSznGSzDN8zx023LF4/F4jXoqtepOMfJRi1FJaJJJaI4MqwscFlmX4OKSWGwWFoadXTowg36yacm3q223qfUX7Af/Jw+mf8AYq+KP/SWGvuvCb/ksKP/AGAY7/0iJ8f4l/8AJL1f+w3B/wDpcj7A/wCCkn/JLPAn/Y/r/wCo7rVfonjP/wAiHKv+xuv/AFDxR8N4U/8AI5zH/sWP/wBSsOfjVX83n7wFABQB9q/sB/8AJw+mf9ir4o/9JYa/TPCb/ksKP/YBjv8A0iJ8B4l/8kvV/wCw3B/+lyPsD/gpJ/ySzwJ/2P6/+o7rVfonjP8A8iHKv+xuv/UPFHw3hT/yOcx/7Fj/APUrDn41V/N5+8BQAP/Z'
      }
    }
  },
  methods: {
    chooseElement (nameMenu) {
      // this.activeElem = name
      this.$emit('MenuElement', nameMenu)
      console.log(`header ${nameMenu}`)
    }
  },
  computed: {
    ...mapGetters(['getMainMenu'])
  },
  components: { LogoComponent, MenuComponent },
  mounted () {
    this.menu = this.getMainMenu
  }
}
</script>

<style scoped lang="scss">
.footer {
  margin-top: 96px;
  padding-bottom: 134px;

  &-logo {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;

    &__text {
      color: #292F36;
      font-family: DM Serif Display, sans-serif;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 50px */
    }
  }

  &-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &-company {
      width: 33%;

      &-info {

        margin-bottom: 31px;
        &__text {
          color: #4D5053;
          font-family: Jost, sans-serif;
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 33px */
          letter-spacing: 0.22px;
          text-align: left;
        }
      }

      &-socials {
        display: flex;
        gap: 54px;
      }
    }

    &-pages {
      width: 33%;
      display: flex;
      align-content: center;
      justify-content: center;

      &-wrapper {

      }

      &__header {
        color: #292F36;
        font-family: DM Serif Display, sans-serif;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 31.25px */
      }

      &__ul {

      }

      &__li {
        list-style-type: none;
        color: #4D5053;
        font-family: Jost, sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 300%; /* 66px */
        letter-spacing: 0.22px;
      }
    }

    &-contacts {
      width: 33%;
      text-align: left;

      &__header {
        color: #292F36;
        font-family: DM Serif Display, sans-serif;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; /* 31.25px */
        margin-bottom: 26px;
      }

      &__attributes {
        color: #4D5053;
        font-family: Jost, sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 33px */
        letter-spacing: 0.22px;
        margin-bottom: 35px;
      }
    }

  }
}
</style>
