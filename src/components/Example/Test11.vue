<template>
  <nav>
    <a href="/profile" id="profile">My Profile</a>
    <a href="/admin" id="admin" v-if="admin">Admin</a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      admin: false
    }
  }
}
</script>