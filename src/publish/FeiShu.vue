<template>
    <div>
      <tinymce-editor :init="init" v-model="form.content"></tinymce-editor>
    </div>
  </template>
  
  <script>
  import Editor from "@tinymce/tinymce-vue";
  
  export default {
    name: 'FeiShu',
    components: {
      "tinymce-editor": Editor
    },
    data() {
      return {
        form: {
          content: "",
        },
        init: {
          language_url: "/lib/js/zh_CN.js",
          language: "zh_CN",
          height: 430,
          plugins: "link lists image code table colorpicker textcolor wordcount contextmenu",
          toolbar: "bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify|bullist numlist |outdent indent blockquote | undo redo | link unlink image code | removeformat",
          branding: false,
          images_upload_handler: (blobInfo, success, failure) => {
            success('data:image/jpeg;base64,' + blobInfo.base64());
            if (failure) {
              console.log(failure);
            }
          }
        },
      };
    },
  };
  </script>
  