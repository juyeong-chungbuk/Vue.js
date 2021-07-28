<template>
  <div>
      <h5><router-link to="/detail">{{blog[0].title}}</router-link></h5>
      <p>{{blog[0].content}}</p>
      <p>{{blog[0].date}}</p>
  </div>
    <div>
      <h5><router-link to="/detail" :selectedblog="blog[1]">{{blog[1].title}}</router-link></h5>
      <p>{{blog[1].content}}</p>
      <p>{{blog[1].date}}</p>
  </div>
    <div>
      <h5><router-link to="/detail" :selectedblog="blog[2]">{{blog[2].title}}</router-link></h5>
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