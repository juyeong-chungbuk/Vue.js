<template>
  <div>
      <h5 @click="$route.fullPath">{{blog[0].title}}</h5>
      <p>{{blog[0].content}}</p>
      <p>{{blog[0].date}}</p>
  </div>
    <div>
      <h5 @click="$router.push('/detail/1')">{{blog[1].title}}</h5>
      <p>{{blog[1].content}}</p>
      <p>{{blog[1].date}}</p>
  </div>
    <div>
      <h5 @click="$router.push('/detail/2')">{{blog[2].title}}</h5>
      <p>{{blog[2].content}}</p>
      <p>{{blog[2].date}}</p>
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