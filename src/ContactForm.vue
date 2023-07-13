<template>
  <div class="contact-container">
    <div class="contact-content">
      <div class="contact-info">
        <h3 class="main-title">HeptaAI Contact Form</h3>
        <p class="sub-title">Get in touch with HeptaAI, a leading Artificial Intelligence business in the market today. Ask us your questions and discover the possibilities that HeptaAI can offer your business.</p>
      </div>
      <div class="contact-form">
        <form class="form-block" novalidate>
          <div class="form-grid">
            <div class="input-group">
              <label for="name" class="label-text">Name</label>
              <input type="text" id="name" class="input-field" />
            </div>
            <div class="input-group">
              <label for="email" class="label-text">E-mail</label>
              <input type="email" id="email" class="input-field" />
            </div>
            <div class="input-group" style="grid-column:span 2;">
              <label for="message" class="label-text">Message</label>
              <textarea id="message" class="input-field" rows="5"></textarea>
            </div>
          </div>
          <div class="form-footer">
            <p class="terms-text">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" class="font-bold">Privacy Policy</a> and <a href="https://policies.google.com/terms" class="font-bold">Terms of Service</a> apply.</p>
            <button type="submit" class="submit-button">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
}
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: #1b1b1b;
  color: white;
  padding: 40px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 800px;
}

.contact-info {
  display: flex;
  flex-direction: column;
}

.main-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.sub-title {
  font-size: 16px;
  margin-bottom: 30px;
}

.contact-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-block {
  width: 100%;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.input-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
}

.label-text {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

.input-field {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: gray;
}

.form-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.terms-text {
  font-size: 12px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #7DBAD0;
  color: #111827;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>
```