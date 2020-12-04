<template>
    <b-container fluid class="footer">
        <b-row class="bg-dark text-light py-4">
            <b-col lg="12" xl="8" offset-xl="2">
                <b-row>
                    <b-col lg="4">
                        <b-list-group flush>
                            <b-list-group-item to="/" class="text-light">
                                ERC20 Token生成器
                            </b-list-group-item>
                            <b-list-group-item to="/docs/" class="text-light">
                                文档
                            </b-list-group-item>
                        </b-list-group>
                    </b-col>
                    <b-col lg="4">
                        <b-list-group flush>
                            <b-list-group-item to="/create-token/" class="text-light">
                                 创建ERC20 Token
                            </b-list-group-item>
                            <b-list-group-item href="/watch-token/" target="_blank" class="text-light">
                                创建ERC20 Widget
                            </b-list-group-item>
                        </b-list-group>
                    </b-col>
                    <b-col lg="4">
                        <b-list-group flush>
                            <b-list-group-item v-b-modal.modal-feedback class="text-warning">
                                <small>联系我们</small>
                            </b-list-group-item>
                            <b-list-group-item v-b-modal.modal-terms>
                                <small>用户协议</small>
                            </b-list-group-item>
                        </b-list-group>
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="12" xl="8" offset-xl="2">
                <hr>
                <b-list-group flush>
                    <b-list-group-item>
                        <small>
                            created by
                            <b-link class="text-warning" href="https://github.com/xdweleven/erc20-generator" target="_blank">
                                即刻区块链组
                            </b-link>
                        </small>
                    </b-list-group-item>
                </b-list-group>
            </b-col>
        </b-row>
        <b-modal id="modal-feedback"
                 title="Leave a Feedback"
                 size="lg"
                 centered
                 hide-footer>
            <b-embed
                    type="iframe"
                    aspect="4by3"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSe62q73MmB4_irkkI-HF9QWUpdIVDk8c7zF9UMy16g6n-KQbA/viewform?embedded=true"
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                    allowfullscreen
            ></b-embed>
        </b-modal>
        <b-modal id="modal-terms"
                 title="用户协议"
                 size="lg"
                 centered
                 hide-footer>
            <b-embed
                    type="iframe"
                    aspect="4by3"
                    src="https://vittominacori.github.io/erc20-generator-terms/"
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                    allowfullscreen
            ></b-embed>
        </b-modal>
    </b-container>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>
