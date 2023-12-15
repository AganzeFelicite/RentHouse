//package com.rentHouse.findHouse.security;
//
//import jakarta.servlet.DispatcherType;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.servlet.util.matcher.MvcRequestMatcher;
//import org.springframework.web.servlet.handler.HandlerMappingIntrospector;
//
//import static jakarta.servlet.DispatcherType.ERROR;
//import static jakarta.servlet.DispatcherType.FORWARD;
//import static org.springframework.security.config.Customizer.withDefaults;
//
//@Configuration
//@EnableWebSecurity
//public class WebSecurityConfig{
//    @Bean
//    MvcRequestMatcher.Builder mvc(HandlerMappingIntrospector introspector) {
//        return new MvcRequestMatcher.Builder(introspector).servletPath("/spring-mvc");
//    }
//    @Bean
//    SecurityFilterChain securityFilterChain(HttpSecurity http,  MvcRequestMatcher.Builder mvc) throws  Exception{
//        http
//                .authorizeRequests(authorize -> authorize
////                        .requestMatchers(mvc.pattern("/api/v1/owner/**")).hasAuthority("controller")
////                        .requestMatchers(HttpMethod.POST).hasAuthority("write")
////                        .requestMatchers("/api/v1/owner/saveOwner").permitAll()
////
//
//                        .anyRequest().permitAll()
//
//                )            .csrf().disable()  // Disable CSRF for simplicity; consider enabling it in production
//                .httpBasic(withDefaults());
//
//        return http.build();
//    }
//}
