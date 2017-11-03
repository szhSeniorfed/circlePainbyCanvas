/**
 * 圆环canvas实现
 * Created By szh
 * 使用方法：
 * html引入<script src="circlePainbyCanvas.js"></script>
 * var pan = new cieclePain(this.insureObject);
 * 更新日志:
 * 2017-11-3 创建 --szh
 */
(function(window) {
    function cieclePain(data) {
        this.draw( data );
            data.id = setInterval( () => {
                this.draw( data );
                if( data.endAngle >= data.startAngle + 2*Math.PI * data.percent / 100 ) {
                    clearInterval( data.id );
                }
            }, 10);
    }
    cieclePain.prototype = {
        draw: function(data) {
            let ctx = data.ctx;
            ctx.clearRect( 0, 0, data.canvas.width, data.canvas.height );
            ctx.beginPath();
            ctx.arc( 130, 130, data.radius, 0, 2*Math.PI);
            ctx.lineWidth = data.lineWidth;
            ctx.lineCap = data.lineCap;
            ctx.strokeStyle = data.strokeStyle[0];
            ctx.stroke();
            ctx.closePath();
            data.endAngle = (data.endAngle*180/Math.PI + 1)*Math.PI/180;
            ctx.beginPath();
            ctx.arc(130,130,data.radius,data.startAngle,data.endAngle);
            ctx.lineWidth = data.lineWidth;
            ctx.lineCap = data.lineCap;
            ctx.strokeStyle = data.strokeStyle[1];
            ctx.stroke();
        }
    }
    window.cieclePain = cieclePain;
})(window);
