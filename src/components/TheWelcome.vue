<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum lacus ullamcorper tortor condimentum, ut aliquet tortor vulputate. Integer consectetur interdum justo at feugiat. Proin sit amet dui eget nunc sagittis consectetur. Duis massa erat, fermentum eget metus nec, auctor imperdiet leo. Integer auctor, lacus consequat sagittis volutpat, diam quam luctus est, at dictum nulla urna non nisi. Integer rhoncus placerat mi sit amet rhoncus. Aliquam ac urna dolor. Duis scelerisque elit lectus, nec laoreet metus feugiat sit amet. Nunc ultrices tortor dui, ac sagittis metus elementum semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Nunc iaculis vitae ipsum et rhoncus. Sed efficitur cursus metus sit amet tempor. Donec feugiat arcu sit amet placerat tincidunt. Quisque accumsan sem quis risus lobortis laoreet. Proin luctus quis neque at imperdiet. Duis sit amet molestie ex. Donec vehicula facilisis erat. Suspendisse blandit, sapien quis sagittis dapibus, sem tortor feugiat mi, vel dapibus nunc magna at est. Phasellus tincidunt neque id nunc ullamcorper facilisis. Nulla tempor non orci id finibus. Nulla et orci id mi commodo dictum eu a felis. Suspendisse tortor arcu, bibendum in risus at, aliquet ornare est. Suspendisse convallis, nisl at ullamcorper tincidunt, nunc turpis tempor lectus, et interdum ante erat et nisi. Suspendisse pretium feugiat eros, sit amet eleifend quam interdum non. Donec ut vehicula lectus.

Etiam sollicitudin enim a suscipit mattis. Vivamus sagittis nec lacus a tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam maximus lacus eu metus maximus aliquam. Proin ac mollis arcu, vel gravida orci. Morbi eu ex vel nisl fringilla vulputate et ac massa. Praesent mattis blandit venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu risus, maximus eu congue nec, faucibus et ligula. Ut pellentesque nibh ac libero varius dictum. Donec tortor metus, pharetra sed ullamcorper a, sollicitudin non mauris. Integer gravida, turpis vel molestie dictum, felis mauris sodales tortor, at euismod lorem massa et nunc. Nunc ante elit, finibus sit amet consectetur id, facilisis eu sapien.

Quisque feugiat tellus in erat condimentum luctus. Nulla a congue quam, sed porttitor dolor. Nam lectus nisi, fermentum consectetur consectetur accumsan, suscipit quis nibh. Suspendisse semper justo quis consequat viverra. Quisque feugiat vel lorem ut eleifend. Phasellus eget odio eget arcu iaculis pellentesque quis et dui. Fusce ut est ut nunc egestas lobortis eu id mauris. Phasellus vitae purus at dui facilisis sollicitudin a nec metus. Etiam suscipit ac lectus eu tempor. Duis rutrum in orci et dapibus.

Quisque pellentesque lorem rutrum augue mollis pretium. In luctus vitae dolor eget condimentum. Aliquam porttitor sem in nisi fringilla cursus. Etiam tellus odio, elementum nec congue sit amet, porta elementum ante. Mauris lacinia tincidunt tincidunt. Duis malesuada sed velit a imperdiet. Cras tempor, dui at porttitor euismod, lacus libero consectetur dui, at posuere ligula arcu at ex. Aliquam turpis urna, eleifend at pharetra quis, maximus at odio. Aenean in sapien ac elit lobortis viverra nec vitae est. Sed eget laoreet enim. Vestibulum non convallis urna, non venenatis massa.
  </WelcomeItem>


</template>
