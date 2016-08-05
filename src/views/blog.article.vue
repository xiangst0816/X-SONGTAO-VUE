/**
* Created by xiangsongtao on 16/7/24.
* Description:
*/
<template>
    <div class="article-detail animated fadeIn">
        <!--文章-->
        <div class="paper" :class="{'loading':isLoading}">
            <section class="paper__header">
                <ol class="breadcrumb">
                    <li><a v-link="{ name: 'index'}">首页</a></li>
                    <li><a v-link="{ name: 'blog'}">博客</a></li>
                    <li class="active">文章</li>
                </ol>
                <h1 ng-bind="article.title">{{article.title}}</h1>
            </section>
            <section class="paper__info">
                <div class="paper__info--span">
                    <i class="fa fa-calendar"></i>
                    <span>{{article.publish_time   | moment "from" "now"}}</span>
                </div>
                <div class="paper__info--span">
                    <i class="fa fa-book"></i>
                    阅读数
                    <span ng-bind="article.read_num">{{article.read_num}}</span>
                </div>
                <div class="paper__info--span">
                    <i class="fa fa-comments"></i>
                    评论数
                    <span ng-bind="article.comment_num">{{article.comment_num}}</span>
                </div>

                <div class="paper__info--span hidden-xs" v-for="tag of article.tags">
                    <i class="fa fa-tag"></i> <span>{{tag}}</span>
                </div>
            </section>
            <section class="paper__content">
                <div class="paper__content--inner markdown-body" ng-bind-html="article.content | toTrusted">
                    {{{article.content}}}
                </div>
                <!--page-->
            </section>
            <!--the end-->
        </div>
        <!--评论-->
        <section class="commentbox">
            <!--标题-->
            <div class="commentbox__header">
                <h3><span class="commentbox__header--Comments">Comments</span><span class="commentbox__header--count">{{article.comment_num}}</span></h3>
            </div>
            <!--提问题-->
            <div class="commentBox__question" @click="replyBtn('')">
                <comment-box :has-nick-name.sync="hasNickName" :article-id="article._id" :pre-id="article._id"></comment-box>
            </div>

            <!--问题盒子-->

            <div class="commentbox__inner">
                <div class="comments" v-for="comment of commentList">
                    <!--{{comment._id}}{{'&#45;&#45;'}}{{chain.selectId ==comment._id}}{{'&#45;&#45;'}}{{toggle}}{{'&#45;&#45;'}}{{chain.selectId}}-->
                    <div class="comments__ask">
                        <div class="comments__ask__header">
                            <!--<span class="name" ng-bind="comment.name"></span>&ensp;·&ensp;<span am-time-ago="comment.time" ></span>&ensp;·&ensp;<span class="reply" ng-click="commentToComemntBtn($event)">回复</span>-->
                            <span class="name">{{comment.name}}</span>&ensp;·&ensp;<span>{{comment.time | moment "from" "now"}}</span><span class="hidden-xs">&ensp;·&ensp;<span class="reply"
                                                                                                                                                                                 @click="replyBtn(comment._id)">回复</span></span>
                        </div>
                        <div class="comments__ask__content">
                            <span>{{comment.content}}</span>
                        </div>
                    </div>
                    <div class="comments__reply" :class="{'active':(comment._id==selectId && toggle)}">
                        <div class="commentBox__question">
                            <comment-box :has-nick-name.sync="hasNickName" :article-id="comment.article_id" :pre-id="comment._id"></comment-box>
                        </div>
                        <div class="comments__reply__each" v-for="reply of comment.next_id">
                            <div class="comments__reply__header">
                                <span class="name">{{reply.name}}</span>&ensp;·&ensp;<span>{{reply.time | moment "from" "now"}}</span>
                            </div>
                            <div class="comments__reply__content">
                                <span ng-bind="reply.content">{{reply.content}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped lang="scss">
    //base
    @import "../theme/theme.scss";

    .article-detail {
        /*width: 780px;*/
        min-width: 780px;
        max-width: 980px;
        width: 52%;
        margin: 0 auto;
        padding-bottom: 30px;
        box-sizing: border-box;
        .paper {
            background-color: transparent;
            margin-bottom: 30px;
            /*border-radius: 4px;*/
            overflow: hidden;
            &.loading {
                .paper__header {
                    h1 {
                        background: #eee;
                    }
                }
                .paper__info {
                    .paper__info--span {
                        opacity: 0.3;
                        background: #fff;
                        min-width: 70px;
                    }
                }
                .paper__content {
                    .paper__content--inner {
                        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlsAAALwCAYAAACgHrBcAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAQABJREFUeAHt3U+sp+uWF/Rb1fSAP/ecum03wZiQEG3iBMIAB6ZDjANHRgZC1MhAnBgZEEOCfxIcMCFBhThgoCYOYAAjYQAycmAcdGIikk6YGNCYmBAJILfOuU33oG+f42+dOt97Vq1+3vf3vr/927tq7/q8yannedaz1nre32fXrfP0ruo63/uehwABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECDwMQq8OvtSb9++/fHZGvkECBAgQIAAgZck8ObNm9909PO8PpoojwABAgQI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yc+6aupJ/N3qu3ed8bPr6tfPSn1iGXvezOl7Nc9+zeuZ696z752NV+/UpE/Wq3OTM/d6vNfv5fWazFObddXXk/i71Xc/9viR+ezb16v6vn92vnrv3qPv93jm/X0qN/Ga15P9xLN+t/vuxx7r89T0XHMCBAgQaAKP9Z2t+gW4/4JcR65i7VV+Mr2Wd23/J40OTs70W+UejfXXmTV93ee9ps+v5az2V7Hq+djx/t575828vt56x55zZt77HZlX757Xz9qK79X0+mvz2X+uz5xza+2sm+uffAbf2foJhQkBAgR+InDP72xV0/pFuJ550Zqx5FW8z3vejNdePend97fm7yreP6Pn9n4173t9nj45O+sar8WO9Ok9+rz69/rM93LOvlN6pXfV15P4u9V3PyZ+Lb/v93nqq2OPb80rb6vmaI/ee/brvVfz1GYv6+pTT+I139tb7ff8Pq/cPOmf/axrfxXr8fTYyqv93m/Wzrq5nvm19hAgQIDAEHjoZSu/UF/7RTj7OT51tc58Lyd7GXvd3jz5OWPm1jo5c6/XzLy57j36fPace3vr7PX36PP+Domnpu/N+XynWteTHjXvffq6x7fyk9P3+7z65enxrXnlpmfNk5dY1n1va56a2t+az73ef/btPfb2kpdec91rs3ftPXpNzetJbc55F/3OrOdszXttn1f+XG/FKu4hQIAAgW8FHuu3EQETIPAJCvhtxE/wi+4jEyBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBA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vVj25vvM+rk/1+ljJECAAAECpwXudtmqk+syc/kO1394meZfVhmvvVjPm/8inOvZa6/2m9y6aP3gBz/4i7Pwzuut90i8f44+z369zireYzNnfoS93NU5q1j17PF+xuzfc/te5r3P1rz3vzbvPZI7Y32d+ep9Ul9j9hOb68SNBAgQIEDgtMBdL1t1en2H63K5+WOXaf1B9P4vrfyLr9L6vNY9r9b1zJyt2Kr2mwbVoy5/T3DRqvO23mMrnnfc2p/x6dHXfV5957pis99WbMZnr7le9a0e9fS91bz3OjLvPZLfY3tn9r3UVmxrXnseAgQIECDwYIG7X7bqjS6Xm1+6/KH5f7v+ioX2hv1fin3eUt77F98qp8f6vySrx3vrOvvHP/7xH37kP6PV333O33ufttnjfZ6UVaz2+mef6729Vb9VrHqu4lu9V7nVo569vXcZ737svY/Mt2orfvTMyj17VtV4CBAgQIDATQKvbqo6UfT27ds/dEmv31r8HYuy+hdk/xffIuWb0CpvFavkX758Z+2/e6LvZn3v8vn+ztZLiz9/gctvjf+e5/8pfAICBAgQ+JACj37Zqg/3xRdf/Mxl+COXS9C/exmvXa76JarPq9XeU7n/4+U7Wv/NI/7VDnvn2yNAgAABAgQI/AaBJ7ls5dS6dH311Vd/8HIh+oOX2M8nfhmPXKqSkzHl/+DS769fFn/ZJSskRgIECBAgQOBjEXjSy1b/0D/84Q9/3+UPr/+BS+z3X77j9bsv47XveKX8ly+Xq797Wfyty/i3P+Cfycr7GAkQIECAAAECmwIf7LLV3+jb73j9zsvl6Z+/XLy+f7mEff8yflY5l9iXl++G/egy/ugS+78ue/+P72B1PXMCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQeJkCr85+rLdv3/5PZ2vkEyBAgAABAgReksCbN2/+taOf5/XRRHkECBAgQIAAAQLnBVy2zpupIECAAAECBAgcFnDZOkwlkQABAgQIECBwXsBl67yZCgIECBAgQIDAYQGXrcNUEgkQIECAAAEC5wVcts6bqSBAgAABAgQIHBZw2TpMJZEAAQIECBAgcF7AZeu8mQoCBAgQIECAwGEBl63DVBIJECBAgAABAucFHuuy9aPzr6LiigDTK0AvbHv19V7FXtjHvvvHmWZznQNnfK6T91jjU563OmsVy2fd20uO8Xvfe+5Oz/H9n807P/SytfVBv7/4X95WbqXu7c39nnt2ntfqdXv9596R+lVNP6/PZ27f6/PK66Z9b2teNf3peRWf6+T2+EPmqzN6v9V+3uHa3tzf63tmL+fv1cyzH2NdPfvXu9b19Fh/xz6vvLmesb6/NZ81te5Pr0t8xs6uq0+v2ZofPa/yutlc9/5H86pHr5vrvb2ZW+s8/fzZIzkz3tdH5unTz1rFeq/a7/l9r88rr6+35vfI2+uxt9ffaeYdWc+c2a87zdxa1zNr+nprvqr7pln7odeu8q/tV01//57f57f07vVb82t9t+qOvPNWbY/P8/ve1rxqDj/3/m8j1kvND9/X/cVmbu31WJ/3ug81/9je54jD0Xc+mnfkzIfkXHuPa/uPefZDep+pXX3GVexMz3vlfgzvceQdVjmr2MrlaN6q9pbYtfOu7Z85c9VrFTvTU+6HE7jX1+5efT6cxAc6+UP+txHnxWquO8lqr8f6vNfdOq+fUPNZxZIz91bvM3NSm/HafvL2xof0OPrOq7y9d7q2N995rmd99lfvkb2qWe33Xj23x2u+t1f7q96zZq6rrj9zf657bs1X+6v36LFVTfrOvblO3q1jf4/0WJ2xiiW/xrk/1z13zlfvcCSn1+2ddzSvztzrs7fX3/faeX0/dUd7Jz/jqlePzb5znT5zfMq8vbP29vo7X8ub+3Pde9W87/d58o7Gkt/HWdvX/WuXmr6fWB9X+6s+vSbzVW32ary233P7/Na6h5x5r/N7n935vb+ztXuYTQIECBAgQIDASxA4852tl/B5fQYCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIPAggVdnq9++ffvXztbIJ0CAAAECBAi8JIE3b978m0c/z+ujifIIECBAgAABAgTOCzzVZev7J19tK38rfrL9e+lne27lr+IzNtfvvci3iyM5lbrKW8VWZxyJ3bPXkfM+RM5jfMZVz1Xsls97S5+tmq34Le9VNUf6zZy5vtZn5s/1mXd/SO3Rc/oZfX6tfi93b2+r79Gao3k5Z+bPdfLOjB9Lj6PvvPW+q/gqNs85kjNr7r1evcMqdvTcM7VbuVvxa+9wa136PrQ+fb7ntxF/QmFCgAABAgQIEDgm4LcRjznJIkCAAAECBAg8usBT/Tbio38QBxAgQIAAAQIEPkYBl62P8avinQgQIECAAIEXI+Cy9WK+lD4IAQIECBAg8DEKuGx9jF8V70SAAAECBAi8GAGXrRfzpfRBCBAgQIAAgY9RwGXrY/yqeCcCBAgQIEDgxQi4bL2YL6UPQoAAAQIECHyMAh/lZevVq1c/WmFtxVe5HzI233OuH+vdnuqcrfe/9fxb67beYxW/1xmzz1yvzv7QsfmOc93fb2+v5906n/3n+ta+W3VH+8+8ud7q/1jxef5c3/vcx+5/7/dNv6PvPfPmOv0yXttP3tY46+e6123tbcV77a3za73n/lyvzj2SU3VH87Zyz9Sv3vNs7F7nPeiy1V/iyHzibdV8/fXXP/kr8nvOVrznzDPmuuduzWfNtXXvU7n9Pee65z5kXn3r6T36uT1+ZD579Zq5t1pX7Mj5q9ojdWfeZ+Y+5N1mr/6uR/vOHn29NZ9OW3k9XjV5evzoO1dtz+09aq+v+7z2jj69f9X09ey5t+57W/O9/r1m5s11z+3zyuvrrfnRvF7fXe7xPnvvsNd/1s11f+fay9Pj95pX796r1t1p7tV+np5Xsb5e1e3t9/w+z1mz/2q9ldv77b1Dr695r8vejPX1td59v/r1de+Ts2ZOrY/k9Zw+T99+7irWa47M53v1mrl37bzsHx3953qOSskjQIAAAQIECHwrcOY/1wONAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIPB4Aq/Otv7iiy/+0tka+QQIECBAgMDLFvj888//vZf9CW//dK9vL1VJgAABAgQIECBwTcBl65qQfQIECBAgQIDAAwTudtn6+uuvv9/fw5qHnw/fCfjfw8f1v4f6yviafFxfE1+P5/31+O5XO7OVgD+ztVIRI0CAAAECBE4J+DNb21x3+87W9hF2CBAgQIAAAQKfroDL1qf7tffJCRAgQIAAgScQcNl6AmRHECBAgAABAp+ugMvWp/u198kJECBAgACBJxBw2XoCZEcQIECAAAECn66Ay9an+7X3yQkQIECAAIEnEHDZegJkRxAgQIAAAQKfroDL1qf7tffJCRAgQIAAgScQcNl6AmRHECBAgAABAp+ugMvWp/u198kJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBA4KMWeHX27d6+fftnz9bIJ0CAAAECBAi8JIE3b978Z0c/z+ujifIIECBAgAABAgTOC7hsnTdTQYAAAQIECBA4LOCydZhKIgECBAgQIEDgvIDL1nkzFQQIECBAgACBwwIuW4epJBIgQIAAAQIEzgu4bJ03U0GAAAECBAgQOCzgsnWYSiIBAgQIECBA4LyAy9Z5MxUECBAgQIAAgcMCLluHqSQSIECAAAECBM4LuGydN1NBgAABAgQIEDgs4LJ1mEoiAQIECBAgQOC8gMvWeTMVBAgQIECAAIHDAh/ysvWjw2/5chMZfO9702Cu7/nVn72vre959sfUa37ux3y3e551z171ma/1u7Z/xO1aj2v71854aP21/o+5f/Tdj+bd611vOe+pas5+xlve6+wZe/kf+vy9d7u2d9d3/5CXre9f+6SfwD6D731vGsz1PX8azN7X1vc8+2PqNT/3Y77bPc+6Z6/6zNf6Xds/4natx7X9a2c8tP5a/8fcP/ruR/Pu9a63nPdUNWc/4y3vdfaMvfwPff7eu13be87vfu2z2SdAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAk8v8OrskW/fvv1TZ2vkEyBAgAABAi9b4M2bN3/mZX/C2z/d69tLVRIgQIAAAQIECFwTcNm6JmSfAAECBAgQIPAAAZetB+ApJUCAAAECBAhcE3DZuiZknwABAgQIECDwAAGXrQfgKSVAgAABAgQIXBNw2bomZJ8AAQIECBAg8AABl60H4CklQIAAAQIECFwTcNm6JmSfAAECBAgQIPAAAZetB+ApJUCAAAECBAhcE3DZuiZknwABAgQIECDwAAGXrQfgKSVAgAABAgQIXBNw2bomZJ/AJyDw6tWrL/c+5rX9vdrntPepfE5fk+ck8HG8q/9tPOzrcPfL1tYXZMbnun+M1d4qtlcz88+ue+85v9Yr+Ufzkl/jrOl7q/nMv7buPa7lzv1em/m1nLk/1+kzx1XejPV1n1eva+tbc1Z1Fatnnvku+u7HuXd2nV6zLvEa595cr3JS//XXX3+W+Wrs+7PvtfWqX2JHamdO1a5i6fmQ/f459/rN8+e6167mM//setVzLzb7V+4qttXjWu61/dn3TP7Rr0nOWPWesWvr6nUt5977R8587M+4eoec2b8O87Mnx7gt8Gp7a73z9u3bP7XeESVAgAABAgQ+VYE3b978mU/1s/vcBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIMgJSwEAABdTSURBVECAAAECBAgQIECAAAECBAgQIECAAIEPJ/Dq7NFffPHFHz9bI58AAQIECBAg8JIEPv/8879w9PO8PpoojwABAgQIECBA4LyAy9Z5MxUECBAgQIAAgcMCLluHqSQSIECAAAECBM4LuGydN1NBgAABAgQIEDgs4LJ1mEoiAQIECBAgQOC8gMvWeTMVBAgQIECAAIHDAi5bh6kkEiBAgAABAgTOC7hsnTdTQYAAAQIECBA4LOCydZhKIgECBAgQIEDgvIDL1nkzFQQIECBAgACBwwIuW4epJBIgQIAAAQIEzgu4bJ03U0GAAIEPJvDVV1/96IMd7mACBG4SePBla/4P/9r62lvO+mv5ff9s7cy/tu5nPXQ+z3pov1X9Pc+Yvea6zl/FVu91NNb79Xnqj8aSf3ac/ef6bL9b8ueZ19Y5Y+Yl3seZM9c9d2t+r5ozfc7k1nvP/Ieutyy24v28Pt/KX8V73evXr7+/ylnFet1qv2J7OXPv2rqf0XP7vOfM+bW8a/uz3z3Wj3Xmmb7Xcvf2V3szNtf3cLvW46FnbtVvxffe55aavX6rvVer4F7siy+++ON7+/YIECBAgAABAi9d4PPPP/8LL/0z+nwECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQOBuAq/OdvrhD3/4R8/WyCdAgAABAgRetsAPfvCDv/iyP+Htn+717aUqCRAgQIAAAQIErgl8lJet169ff//ai1/bf2iPs/Vn86+9/8eyv/W5tuIfy3v393iMd32Mnv2dV/PVmavYqvaxYh/6/Pm55vvM9cz/UOv5XnM932tvf29v9nmM9b3Ov1efI5/xsc56rL73/Ewf8h2PfI6XmuO3EV/qV9bnIkCAAAECTyjgtxG3sT/K72xtv64dAgQIECBAgMDzEnDZel5fL29LgAABAgQIPDMBl61n9gXzugQIECBAgMDzEnDZel5fL29LgAABAgQIPDMBl61n9gXzugQIECBAgMDzEnDZel5fL29LgAABAgQIPDMBl61n9gXzugQIECBAgMDzEnDZel5fL29LgAABAgQIPDMBl61n9gXbet1Xr179aGvvKeLz/LneeoejeVv14gSek4Cf78/pq+Vdu4Cfu13j/PxBl62J39db87zi1n6PJ7fGGd9b970+T78eOztfvUv6bu0dOWPWbtXMvJz99ddf/4b/xFHvsarr+30+c/ve1nye39e9Zvbeyus1fT7r53ovt+/1+V6PmVe581nlzNjeem+vzur7fT73+nvNvJnb94/M9+rn3r3XR97vbM7ZdzzSf9VzxvrP99qrZ6v33JvrW+tmn9V6xrbO6vFZU+s8e3l7e1W/t9/3+jznrsaZN9fzzL6/NZ81c71VtxXPe+/t9715XupnfNbM/bnu+fPnbt/r55mvBfznetYuogQIECBAgMAJAf+5nhNYUgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECdxN4dbbT27dv/9DZGvkECHwaAm/evPmrn8Yn9SkJECBwXOD18VSZBAgQIECAAAECZwVcts6KySdAgAABAgQInBBw2TqBJZUAAQIECBAgcFbAZeusmHwCBAgQIECAwAkBl60TWFIJECBAgAABAmcFXLbOisknQIAAAQIECJwQcNk6gSWVAAECBAgQIHBWwGXrrJh8AgQIECBAgMAJAZetE1hSCRAgQIAAAQJnBVy2zorJJ0CAAAECBAicEHDZOoEllQABAgQIECBwVsBl66yYfAIECBAgQIDACQGXrRNYUgkQIECAAAECZwVcts6KySdAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAk8i8OrsKV9++eUvnK2RT4AAAQIECBB4SQKfffbZLx79PK+PJsojQIAAAQIECBA4L+Cydd5MBQECBAgQIEDgsIDL1mEqiQQIECBAgACB8wIuW+fNVBAgQIAAAQIEDgu4bB2mkkiAAAECBAgQOC/gsnXeTAUBAgQIECBA4LCAy9ZhKokECBAgQIAAgfMCLlvnzVQQIECAAAECBA4LuGwdppJIgAABAgQIEDgv4LJ13kwFAQIECBAgQOCwgMvWYSqJBAgQIECAAIHzAi5b581UECBAgAABAgQOC9x82fr1X//1fzpPWcVmzr3W86y5vvWcrT5b8TPn3KPH6rx79L1Hj9W7rWIPOetI7ZGc1XutYrPXtXV6zLzE+3gkp+cfme/17Ht9vur7WPvX+q7epWKzrq/7fKte/DcaPobJrV+LW+se4zM8tOf8LHP90P5H6u955j17zXefvec6+Vvx7Pdx5s71Xm7fu/f81dmGX3755S+crZFPgAABAgQIEHhJAp999tkvvqTP47MQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFHFXh1tvsPf/jD33e2Rj4BAgQIECDwsgV+8IMf/NLL/oS3f7rXt5c+/8qf+qmf+q3P/1M8n0/Ae/214rJ2eYroS7J/SZ/lKb72n+IZfo58uK/6J33Z+vVf//V/Gvp7/SS8pc8tNXnvDzHe+r7d+5b3vvXcW85KzVOcecblyPscycnne2nj2c9+xv4hVmffa3XWtR73+CyrM1axvF/f6/Ps17gV7znPab71ebbiq892JndVf2vsHj9Hbj37U697st9GrJ9c/Qs912e/EEfrj+adPV8+gU9RYP7vaa4/RZP+mXl0DfNPTcBvI25/xZ/sO1v9olWvM9fbr7jeOVp/NG99iuhLFqh/Mb7kz/cYn23+72mubznzJX0d7uFx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q5wZW73XjM2a9O95PefIPLU9N7Hq3+c5b2/sfXpej/f5Vk7F59m9rs9n3qq2Yr2mz2uvnlVsL/5NkR9+InD372z9pPOY1Bd864tVqdf2R7vDy62+W/HDjW9MnOdeW994zN3K5vvd0vgePXLu7DXXybs23lp3re/cf+g5j1nfe/f5/Awfw3rr/bbiZ975bI+e3+dnzrx37mO+x1bvrfjeZ9ur2dtLzyM5lXst79p+zjs7zr5zvddvlbuKrXoczVvV9tiqzyrWa/rcd7a6xvvzJ7tsvX/sfVZnfhLc58SPp8s9P/s9e308Qi/7TXzNtr++H4vNx/Ie21J2npPAx/TzaetdXLa2f0Y968vW9seyQ4AAAQIECDylgMvWtvaD/szWdls7BAgQIECAAAECJeCy5ecBAQIECBAgQOARBVy2HhFXawIECBAgQICAy5afAwQIECBAgACBRxRw2XpEXK0JECBAgAABAi5bfg4QIECAAAECBB5RwGXrEXG1JkCAAAECBAi4bPk5QIAAAQIECJwSuPzFpr96qkAyAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDAIwm8Otv3iy+++JmzNfIJEPg0BD7//PN/8ml8Up+SAAECxwVeH0+VSYAAAQIECBAgcFbAZeusmHwCBAgQIECAwAkBl60TWFIJECBAgAABAmcFXLbOisknQIAAAQIECJwQcNk6gSWVAAECBAgQIHBWwGXrrJh8AgQIECBAgMAJAZetE1hSCRAgQIAAAQJnBVy2zorJJ0CAAAECBAicEHDZOoEllQABAgQIECBwVsBl66yYfAIECBAgQIDACQGXrRNYUgkQIECAAAECZwVcts6KySdAgAABAgQInBBw2TqBJZUAAQIECBAgcFbAZeusmHwCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC2wL/P3rjVjTFfEYkAAAAAElFTkSuQmCC");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center top;
                        min-height: 834px;
                        width: 100%;
                    }
                }

            }

            .paper__header {
                border: 1px solid transparent;
                padding: 35px 35px 0;
                background: #fff;
                text-align: right;
                a {
                    text-decoration: none;
                }
                h1 {
                    min-height: 52px;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 36px;
                    font-weight: 500;
                    line-height: 1.2;
                    margin: 20px 0 10px;
                }
            }
            .paper__info {
                @include display-flex;
                @include justify-content(flex-end);
                @include align-items(center);
                background: $base-background-color;
                padding: 10px 35px;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.8) inset;
                transition: all ease 200ms;
                .paper__info--span {
                    color: #eee;
                    margin-left: 20px;
                    font-size: 14px;
                    //min-width: 70px;
                    white-space: nowrap;
                }

            }
            .paper__content {
                padding: 35px 35px 0;
                background: #fff;
                //min-height: 800px;
                .paper__content--inner {
                    padding: 5px 0 40px;
                    //border-bottom: 1px dashed #464646;
                }
            }
            .paper__navBox {
                background-color: #fff;
                .paper__navBox__inner {
                    padding: 20px 0;
                    text-align: center;
                    list-style: none;
                    color: $base-word-color;
                    //border: 1px solid transparent;
                    //padding: 35px;
                    @include display-flex;
                    @include justify-content(center);
                    @include align-items(center);
                    border-bottom: 1px solid #000;
                    div {
                        margin: 0 10px;
                        //border: 1px solid #464646;
                        padding: 5px 20px;
                        font-size: 16px;
                        //border-radius: 28px;
                        //transition: all ease 200ms;
                        //cursor: pointer;
                        //&:hover {
                        //  color: #fff;
                        //  border-color: $base-theme-color;
                        //  background-color: $base-theme-color;
                        //}

                    }
                }

            }

        }

        .commentbox {
            background-color: $base-background-color;
            padding: 0;
            border-radius: 3px;
            //border-top: 3px solid $base-theme-color;
            border-bottom: 3px solid $base-theme-color;
            position: relative;
            overflow: hidden;
            &::after {
                /*content: '';*/
                position: absolute;
                top: 0;
                right: 0;
                border-top: 4px solid $base-theme-color;
                border-top-right-radius: 3px;
                width: 40%;
                height: 0;
            }

            .commentbox__header {
                padding: 0 10px;
                //border-bottom: 1px solid #fff;
                margin-bottom: 0;
                text-align: right;
                h3 {
                    margin: 0;
                    height: 72px;
                    @include display-flex;
                    @include justify-content(flex-end);
                    @include align-items(center);

                    .commentbox__header--Comments {
                        font-size: 50px;
                        color: #fff;
                        margin-right: 10px;
                    }
                    .commentbox__header--count {
                        top: 2px;
                        background: $base-theme-color;
                        font-size: 20px;
                        color: #fff;
                        border-radius: 5px;
                        padding: 3px 6px;
                        position: relative;
                        font-weight: 400;
                        vertical-align: baseline;
                        min-width: 30px;
                        min-height: 30px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }

            //问题盒子
            .commentBox__question {
                padding: 0 35px;
            }
            //用户评论内容盒子
            .commentbox__inner {
                padding: 0 35px 35px 35px;
                .comments {
                    margin-bottom: 10px;
                    .comments__ask {
                        box-sizing: content-box;
                        padding: 10px;
                        margin-bottom: 5px;
                        cursor: pointer;
                        border-bottom: 1px solid #1b1b1b;
                        position: relative;

                        &:after {
                            content: '';
                            position: absolute;
                            bottom: -2px;
                            left: 0;
                            width: 100%;
                            height: 0px;
                            border-top: 1px solid #6f6f6f;

                        }

                        &:hover {
                            .reply {
                                color: $base-theme-color-o;
                            }
                        }
                        .comments__ask__header {
                            font-size: 14px;
                            line-height: 130%;
                            padding: 5px 0;
                            color: #ececec;
                            .name {
                                font-size: 18px;
                                color: $base-theme-color;
                            }
                            .reply {
                                transition: all ease 200ms;
                            }

                        }
                        .comments__ask__content {
                            font-size: 14px;
                            line-height: 150%;
                            padding: 5px 0;
                            color: #fff;
                        }
                    }
                    .comments__reply {
                        padding-left: 80px;
                        .commentBox__question {
                            display: block;
                            height: 0;
                            opacity: 0;
                            overflow: hidden;
                            padding: 0;
                        }
                        &.active {
                            //height: 100px;
                            //margin-top: 10px;
                            .commentBox__question {
                                display: block;
                                height: auto;
                                opacity: 1;
                                overflow: visible;
                                -webkit-overflow-scrolling: touch;
                                //height: 100px;
                                margin-top: 10px;
                                &.active {
                                    height: 100px;
                                }
                            }
                        }
                        .comments__reply__each {
                            padding: 5px;
                            margin-bottom: 0;
                            border-bottom: 1px solid #1b1b1b;
                            position: relative;
                            &:after {
                                content: '';
                                position: absolute;
                                bottom: -2px;
                                left: 0;
                                width: 100%;
                                height: 0;
                                border-top: 1px solid #6f6f6f;

                            }
                            .comments__reply__header {
                                font-size: 14px;
                                line-height: 130%;
                                padding: 3px 0;
                                color: #fff;
                                .name {
                                    font-size: 14px;
                                    color: $base-theme-color;
                                }
                            }
                            .comments__reply__content {
                                font-size: 14px;
                                line-height: 150%;
                                padding: 3px 0;
                                color: #fff;
                            }
                        }
                    }

                }
            }

        }
    }

</style>
<script>
    //"57826e945c21c1dd04b4ad4d"
    import API from "../config.js"
    import {GetArticleById} from "../api/api_article"
    import {GetArticleComments, SendComment} from "../api/api_comment"


    import commentReplyBox from '../components/commentReplyBox.vue'


    module.exports = {
        replace: true,
        data: function () {
            return {
                article: {},
                commentList: [],
                toggle: true,
                selectId: '',
                isLoading: true,
                hasNickName: false,
                username: '',//评论人的昵称
                email: '',//评论人的email
            }
        },
        methods: {
            replyBtn: function (id) {
                if (this.selectId == id) {
                    this.toggle = !this.toggle
                } else {
                    this.toggle = true;
                    this.selectId = id
                }
            },
            submit: function () {

            },
        },
        computed: {},
        ready: function () {
            const scope = this;
            /**
             * 初始化
             * */
            $(window).scrollTop(0);// 滚到顶部
            let articleId = this.$route.params.articleId;


            /**
             * 获取数据
             * */
            //获取文章详情
            GetArticleById(articleId).then(function (data) {
                scope.article = data
                scope.isLoading = false;
            }, function (error) {
                console.log(error)
            });
            //获取文章详情
            GetArticleComments(articleId).then(function (data) {
                scope.commentList = data;
            }, function (error) {
                console.log(error)
            });

            /**
             * 获取游客昵称及邮箱,并设置input显示与否
             * */
            let commentInfo = scope.$localStorage.commentInfo;
            if (!!commentInfo && !!commentInfo.name && !!commentInfo.email) {
                scope.hasNickName = true;
                scope.name = commentInfo.name;
                scope.email = commentInfo.email;
            } else {
                scope.hasNickName = false;
            }


        },
        components: {
            'comment-box': commentReplyBox
        },
        events: {
            'replyThisComment': function (data) {
                let params;
                if (this.hasNickName) {
                    params = {
                        article_id: data.article_id,
                        pre_id: data.pre_id,
                        next_id: [],
                        name: this.name,
                        email: this.email,
                        time: new Date(),
                        content: data.content,
                        state: false,
                        isIReplied: false
                    }

                } else {
                    if (!!data.name && !!data.email) {
                        this.$localStorage.$set('commentInfo', {name: data.name, email: data.email});
                        this.hasNickName = true;
                        params = {
                            article_id: data.article_id,
                            pre_id: data.pre_id,
                            next_id: [],
                            name: data.name,
                            email: data.email,
                            time: new Date(),
                            content: data.content,
                            state: false,
                            isIReplied: false
                        }
                    } else {
                        alert("请输入昵称和邮箱")
                        return
                    }
                }

                // 发送评论请求,并且向组件发送事件
                this.$broadcast('Submitting');
                SendComment(params).then(()=> {
                    console.log('comment success');
                    this.toggle =!this.toggle;
                    this.$broadcast('SubmitSuccess');
                }, (error)=> {
                    console.log(error)
                    this.$broadcast('SubmitFailure');
                });

            }
        }
    }
</script>