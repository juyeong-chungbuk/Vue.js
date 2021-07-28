<template>
  <div>
      <h5>{{blog.title}}</h5>
      <p>{{blog.content}}</p>
      <p>{{blog.date}}</p>
  </div>
</template>

<script>
export default {
    name : 'List',
    props : {
        blog : Array,
    }
}
</script>

<style>

</style>