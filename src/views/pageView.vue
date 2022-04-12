<template>
    <div>
        <!--동적 라우팅을 통해 id값에 맞는 memo출력-->
        <!--id : prams.id에 저장되어있음-->
        <!--vuex의 getters를 사용해서 id값을 이용해 가져오기-->

        <p>{{getMemo}}</p>
    </div>
</template>

<script>

export default {
    name : 'pageView',
    computed : {
        getMemo() {
            return this.$store.$state.board[this.$route.params.id-1].memo
        },
    },

}
</script>