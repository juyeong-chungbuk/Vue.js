<template>
    {{$route.params.id}}
    <!-- 파라미터가 연달아 여러개 존재할 수 있기 때문에 params 
        detail/:id1/:id2 
        그 중 id라는 이름으로 된 파라미터를 가져온다 --> 
    <div>
        <h4>상세페이지</h4>
      <h5>{{blog[$route.params.id].title}}</h5>
      <p>{{blog[$route.params.id].content}}</p>
      <p>{{blog[$route.params.id].date}}</p>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'Detail',
    props : {
        blog : Array,
    }

}
</script>

<style>

</style>